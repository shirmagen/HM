import React from 'react';
import { Dialog } from '@material-ui/core';
import Form from '../../../../../components/Form';
import validation from './validation';
import { formStructure } from './formStructure';

export default ({ open, handleClose, userDetails, updateUser }) => {
  const onSubmit = ({ firstName, lastName, email }) => {
    updateUser({ name: { first: firstName, last: lastName }, email });
    handleClose();
  };

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
