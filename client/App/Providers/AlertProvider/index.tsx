import React, { createContext, useState, useContext, FC } from 'react';
import { ApolloAlert } from './Snackbar';
import { Color } from '@material-ui/lab';

type AlertContext = {
  close: () => void;
  open: (message: string, severity: Color) => void;
}

const AlertContext = createContext<AlertContext>({} as AlertContext);

export const AlertProvider: FC = ({ children }) => {
  const [message, setMessage] = useState('');
  const [opened, setOpened] = useState(false);
  const [severity, setSeverity] = useState<Color>('success');

  const open = (message: string, severity: Color) => {
    setMessage(message);
    setOpened(true);
    setSeverity(severity);
  };

  const close = () => {
    setMessage('');
    setOpened(false);
  };

  return (
    <AlertContext.Provider
      value={{
        close,
        open
      }}>
      <ApolloAlert message={message} opened={opened} handleClose={close} severity={severity}/>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
