import React, { useState } from 'react';
import TabPanel from './Tab';
import { Tabs, Tab as MuiTab } from '@material-ui/core';
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

export default () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
      >
        <MuiTab label="Item One" icon={<PhoneIcon />} />
        <MuiTab label="Item Two" icon={<FavoriteIcon />} />
        <MuiTab label="Item Three" icon={<PersonPinIcon />} />
        <MuiTab label="Item Four" icon={<HelpIcon />} />
        <MuiTab label="Item Five" icon={<ShoppingBasket />} />
        <MuiTab label="Item Six" icon={<ThumbDown />} />
        <MuiTab label="Item Seven" icon={<ThumbUp />} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </>
  );
};
