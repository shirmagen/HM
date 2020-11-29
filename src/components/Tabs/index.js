import React, {useState} from 'react';
import TabPanel from './Tab';
import {AppBar, Tabs, Tab as MuiTab, Typography} from '@material-ui/core';
import {Phone as PhoneIcon, Favorite as FavoriteIcon, PersonPin as PersonPinIcon, Help as HelpIcon, ShoppingBasket
  , ThumbDown, ThumbUp} from '@material-ui/icons';

export default () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <MuiTab label="Item One" icon={<PhoneIcon />}/>
          <MuiTab label="Item Two" icon={<FavoriteIcon />} />
          <MuiTab label="Item Three" icon={<PersonPinIcon />} />
          <MuiTab label="Item Four" icon={<HelpIcon />}  />
          <MuiTab label="Item Five" icon={<ShoppingBasket />} />
          <MuiTab label="Item Six" icon={<ThumbDown />} />
          <MuiTab label="Item Seven" icon={<ThumbUp />}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
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
}