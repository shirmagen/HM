import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';

const ApolloSearchBar = styled(Autocomplete)`
  position: absolute;
  width: 90%;
  z-index: 1;
  background: white;
`;

type GetCountriesProps = {
  active: boolean,
  setOptions: Dispatch<SetStateAction<Country[]>>;
}

type Country = {
  name: string
}

const getCountries = async ({ active, setOptions } : GetCountriesProps) => {
  const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
  const countries = await response.json();

  if (active) {
    setOptions(Object.keys(countries).map(key => countries[key].item[0]));
  }
};

export const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Country[]>([]);
  const loading = open && !options.length;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return;
    }

    getCountries({ active, setOptions });

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <ApolloSearchBar
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options}
      getOptionSelected={(option, value) => (option as Country).name === (value as Country).name}
      getOptionLabel={(option) => (option as Country).name}
      loading={loading}
      renderInput={(params) => (
        <TextField
          label="חפש שירים ואלבומים"
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: <>{params.InputProps.endAdornment}</>,
          }}
        />
      )}
    />
  );
};
