import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Row } from 'mui-flex-layout';
import { Box, Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';

const BackgroundImageBox = styled(Box)`
  display: flex;
  flex: 1;
  margin: 70px 0;
  height: 70%;
  width: 70%;
`;
const FormBox = styled(Box)`
  display: flex;
  flex: 1;
  margin: 100px;
`;

const SumbmitButton = styled(Button)`
  margin: 50px 0;
`;
const CreateCard = styled(Card)`
  max-width: 80%;
  max-height: 80%;
  display: flex;
  align-items: center;
  margin-top: 60px;
`;
const CreateCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

export default () => {
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      shir: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Row width={'100%'} height={'100%'} justifyContent="center" style={{ background: 'lightgrey' }}>
      <CreateCard>
        <CreateCardContent>
          <FormBox>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="field1"
                name="field1"
                label="field1"
                value={formik.values.field1}
                onChange={formik.handleChange}
                error={formik.touched.field1 && Boolean(formik.errors.field1)}
                helperText={formik.touched.field1 && formik.errors.field1}
              />
              <TextField
                fullWidth
                id="field2"
                name="field2"
                label="field2"
                type="field2"
                value={formik.values.field2}
                onChange={formik.handleChange}
                error={formik.touched.field2 && Boolean(formik.errors.field2)}
                helperText={formik.touched.field2 && formik.errors.field2}
              />
              <TextField
                fullWidth
                id="field3"
                name="field3"
                label="field3"
                value={formik.values.field3}
                onChange={formik.handleChange}
                error={formik.touched.field3 && Boolean(formik.errors.field3)}
                helperText={formik.touched.field3 && formik.errors.field3}
              />
              <SumbmitButton color="primary" variant="contained" fullWidth type="submit">
                Submit
              </SumbmitButton>
            </form>
          </FormBox>
          <BackgroundImageBox>
            <img src={'../../../../assets/1.jpg'} />
          </BackgroundImageBox>
        </CreateCardContent>
      </CreateCard>
    </Row>
  );
};
