import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';
import { Row } from 'mui-flex-layout';
import { Search } from '@material-ui/icons';

const HMSearchBar = styled(Autocomplete)`
  width: 90%;
`;

const HMSearchIcon = styled(Search)`
   padding-top: 15px;
   paddinig-right: 5px;
   margin: 8px;
`;

export default () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <Row width={'100%'}>
      <HMSearchBar
        groupBy={(option) => option.firstLetter}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            label="חפש שירים ואלבומים"
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          ></TextField>
        )}
      />
        <HMSearchIcon />
    </Row>
  );
};