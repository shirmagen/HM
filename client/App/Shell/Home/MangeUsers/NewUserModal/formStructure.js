import { Mail, Person } from '@material-ui/icons';
import { InputAdornment } from '@material-ui/core';
import PasswordField from '../../../../components/PasswordField';
import React from 'react';

export const formStructure = [
  [
    { name: 'first', label: 'שם פרטי', variant: 'outlined' },
    { name: 'last', label: 'שם משפחה', variant: 'outlined' },
  ],
  [
    {
      name: 'username',
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
    { name: 'password', label: 'סיסמא', Component: PasswordField },
    { name: 'rePassword', label: 'הכנס סיסמא שנית', Component: PasswordField },
  ],
];
