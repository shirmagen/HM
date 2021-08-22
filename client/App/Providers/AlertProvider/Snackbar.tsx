import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, Color } from '@material-ui/lab';

type Props = {
  opened: boolean
  handleClose: () => void
  message: string
  severity: Color
}

export const ApolloAlert = ({ opened, handleClose, message, severity = 'success' }: Props) => (
  <Snackbar
    open={opened}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    autoHideDuration={4000}
  >
    <Alert onClose={handleClose} severity={severity}>
      {message}
    </Alert>
  </Snackbar>
);
