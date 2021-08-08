import { Mail } from '@material-ui/icons';
import { InputAdornment } from '@material-ui/core';
import React from 'react';

export const formStructure = [
  [
    { name: 'firstName', label: 'שם פרטי', variant: 'outlined' },
    { name: 'lastName', label: 'שם משפחה', variant: 'outlined' },
  ],
  [
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
];
