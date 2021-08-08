import React from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const FormField = styled(TextField)`
  margin: 5px 5px;
  height: 80px;
  width: 50%;
`;

export default ({ name, label, formik, ...props }) => {
  const { values, touched, errors, handleChange, handleBlur } = formik;
  return (
    <FormField
      label={label}
      name={name}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors[name] && touched[name] && errors[name]}
      error={errors[name] && touched[name]}
      {...props}
    />
  );
};
