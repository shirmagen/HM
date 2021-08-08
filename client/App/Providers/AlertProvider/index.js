import React, { createContext, useState, useContext } from 'react';
import Alert from './Snackbar';

const AlertContext = createContext();

const severities = {
  success: 'success',
  error: 'error',
  warning: 'warning',
};

export default props => {
  const [message, setMessage] = useState(null);
  const [opened, setOpened] = useState(false);
  const [severity, setSeverity] = useState(severities.success);

  const open = ({ message, severity }) => {
    setMessage(message);
    setOpened(true);
    setSeverity(severity);
  };

  const close = () => {
    setMessage(null);
    setOpened(false);
    setSeverity('');
  };

  const { children } = props;

  return (
    <AlertContext.Provider
      value={{
        close,
        open,
        severities,
      }}
      {...props}
    >
      <Alert message={message} opened={opened} handleClose={close} severity={severity} />
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
