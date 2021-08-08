import React from 'react';
import { Dialog } from '@material-ui/core';
import validation from './validation';
import Form from '../../../../components/Form';
import { formStructure } from './formStructure';

const initialFormValues = {
  first: '',
  last: '',
  username: '',
  email: '',
  password: '',
  rePassword: '',
  isAdmin: false,
};

export default ({ open, handleClose, addUser }) => {
  const handleSubmit = ({ first, last, username, email, password }) => {
    addUser({
      name: {
        first,
        last,
      },
      username,
      email,
      password,
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Form
        validationSchema={validation}
        initialValues={initialFormValues}
        formTitle={'יצירת משתמש חדש'}
        submitForm={handleSubmit}
        submitText={'יצירת משתמש'}
        formStructure={formStructure}
      />
    </Dialog>
  );
};
