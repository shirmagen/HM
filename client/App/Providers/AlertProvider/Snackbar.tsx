import React from 'react';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { Color } from '@mui/lab';

type ApolloAlertProps = {
  opened: boolean
  handleClose: () => void
  message: string
  severity: Color
}

export const ApolloAlert = ({ opened, handleClose, message, severity = 'success' }: ApolloAlertProps) => (
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
