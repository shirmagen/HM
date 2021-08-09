import React, { useState } from 'react';
import { Dialog, IconButton, InputAdornment } from '@material-ui/core';
import validation from './validation';
import { Lock, Mail, Person, Visibility, VisibilityOff } from '@material-ui/icons';
import Form from '../../../../components/Form';

const initialFormValues = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  rePassword: '',
  isAdmin: false,
};

export default ({ open, handleClose, addUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = ({ firstName, lastName, userName, email, password }) => {
    addUser({
      name: {
        first: firstName,
        last: lastName,
      },
      username: userName,
      email,
      password,
    });
    handleClose();
  };

  const formStructure = [
    [
      { name: 'firstName', label: 'שם פרטי', variant: 'outlined' },
      { name: 'lastName', label: 'שם משפחה', variant: 'outlined' },
    ],
    [
      {
        name: 'userName',
        label: 'שם משתמש',
        variant: 'outlined',
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          ),
        },
      },
      {
        name: 'email',
        label: 'מייל',
        variant: 'outlined',
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <Mail />
            </InputAdornment>
          ),
        },
      },
    ],
    [
      {
        name: 'password',
        label: 'סיסמא',
        variant: 'outlined',
        type: showPassword ? 'text' : 'password',
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton>
              <InputAdornment position="end" onClick={togglePassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            </IconButton>
          ),
        },
        onCopy: (e) => {
          e.preventDefault();
        },
        onPaste: (e) => {
          e.preventDefault();
        },
      },
      {
        name: 'rePassword',
        label: 'הקש סיסמא שנית',
        variant: 'outlined',
        type: showPassword ? 'text' : 'password',
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton onClick={togglePassword}>
              <InputAdornment position="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            </IconButton>
          ),
        },
        onCopy: (e) => {
          e.preventDefault();
        },
        onPaste: (e) => {
          e.preventDefault();
        },
      },
    ],
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <Form
        validationSchema={validation}
        initialValues={initialFormValues}
        formTitle={'יצירת משתמש חדש'}
        submitForm={submitForm}
        submitText={'יצירת משתמש'}
        formStructure={formStructure}
      />
    </Dialog>
  );
};
