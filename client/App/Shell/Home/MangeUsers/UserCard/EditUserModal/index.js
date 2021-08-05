import React from 'react';
import { Dialog, InputAdornment } from '@material-ui/core';
import { Mail } from '@material-ui/icons';
import Form from '../../../../../components/Form';
import validation from './validation';

export default ({ open, handleClose, userDetails, updateUser }) => {
  const onSubmit = ({ firstName, lastName, email }) => {
    updateUser({ name: { first: firstName, last: lastName }, email });
    handleClose();
  };

  const formStructure = [
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

  return (
    <Dialog open={open} onClose={handleClose}>
      <Form
        validationSchema={validation}
        initialValues={userDetails}
        formTitle={'עדכון משתמש '}
        submitForm={onSubmit}
        submitText={'עדכן פרטי משתמש'}
        formStructure={formStructure}
      />
    </Dialog>
  );
};
