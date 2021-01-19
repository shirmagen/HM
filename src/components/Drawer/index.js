import React from 'react';
import { Drawer, Divider } from '@material-ui/core';

export default ({ opened, onClose }) => (
  <Drawer open={opened} onClose={onClose} anchor="right">
    <h1>Create Song</h1>
    <Divider />
  </Drawer>
);
