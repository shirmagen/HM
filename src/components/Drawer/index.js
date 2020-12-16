import React from 'react';
import { Drawer, Divider } from '@material-ui/core';
import SongForm from '../Forms/SongForm';

export default ({opened, onClose}) => (
  <Drawer open={opened} onClose={onClose} anchor="right">
    <h1>Create Song</h1>
    <Divider />
    <SongForm onSubmit={onClose}></SongForm>
  </Drawer>
);
