import React from 'react';
import { Drawer, Divider } from '@material-ui/core';

type ApolloDrawerProps = {
  opened: boolean,
  onClose: () => void
}

export const ApolloDrawer = ({ opened, onClose } : ApolloDrawerProps) => (
  <Drawer open={opened} onClose={onClose} anchor="right">
    <h1>Create Song</h1>
    <Divider />
  </Drawer>
);
