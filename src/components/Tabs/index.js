import React, { useState } from 'react';
import Tab from './Tab';
import { TextField, Button } from '@material-ui/core';
import {
  Phone as PhoneIcon,
  Favorite as FavoriteIcon,
  PersonPin as PersonPinIcon,
  Help as HelpIcon,
  ShoppingBasket,
  ThumbDown,
  ThumbUp,
} from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import styled from 'styled-components';

export default () => {
  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const ApolloDataGrid = styled(DataGrid)`
    height: 50%;
    width: 100%;
  `;

  const TabButton = styled(Button)`
    flex: 1;
  `;

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const TabButtons = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <>
      <TabButtons>
        <TabButton index={1} onClick={() => handleChange(1)}>
          Tab 1
        </TabButton>
        <TabButton index={2} onClick={() => handleChange(2)}>
          Tab 2
        </TabButton>
        <TabButton index={3} onClick={() => handleChange(3)}>
          Tab 3
        </TabButton>
      </TabButtons>

      <Tab index={1} value={value}>
        <span>blah1</span>
      </Tab>
      <Tab index={2} value={value}>
        <span>blah2</span>
      </Tab>
      <Tab index={3} value={value}>
        <span>blah3</span>
      </Tab>
    </>
  );
};
