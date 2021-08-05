import React from 'react';
import { Box, Button, Dialog, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import { Column, Row } from 'mui-flex-layout';
import styled from 'styled-components';
import FormInput from '../FormInput';
import { json } from 'body-parser';

const FormHeadline = styled(Typography)`
  font-size: 32px;
  text-decoration: underline;
  text-decoration-color: rgb(91, 184, 93);
`;
const FormContainer = styled(Box)`
  padding: 5%;
`;

const SubmitButton = styled(Button)`
  background-color: rgb(91, 184, 93);
  color: white;
`;

export default ({
  validationSchema,
  initialValues,
  formTitle,
  submitForm,
  submitText,
  formStructure,
}) => {
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialValues,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  return (
    <FormContainer>
      <FormHeadline>{formTitle}</FormHeadline>
      <form onSubmit={formik.handleSubmit}>
        <Column>
          {formStructure.map((inputs) => (
            <Row>
              {inputs.map(({ name, label, ...props }) => (
                <FormInput name={name} label={label} formik={formik} {...props} />
              ))}
            </Row>
          ))}
          <SubmitButton onClick={formik.handleSubmit}>{submitText}</SubmitButton>
        </Column>
      </form>
    </FormContainer>
  );
};
