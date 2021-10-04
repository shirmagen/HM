import React from 'react';
import { Row } from 'mui-flex-layout';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, IconButton, Tooltip } from '@mui/material';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import { Check } from '@mui/icons-material';

export const FirstTab = () => {
  // in the future there will be type and name

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  // add helperText, error
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

  const calculate = ({key}: KeyboardEvent) => {
    if (key === 'Enter') {
      results.push(formik.values.email + formik.values.shir);
      console.log('done');
    }
  };

  const fields = [
    {
      name: 'email',
      onKeyPress: calculate,
      value: formik.values.email,
      onChange: formik.handleChange,
      error: formik.touched.email && Boolean(formik.errors.email),
      helperText: formik.touched.email && formik.errors.email,
    },
    {
      name: 'password',
      onKeyPress: calculate,
      value: formik.values.password,
      onChange: formik.handleChange,
      error: formik.touched.password && Boolean(formik.errors.password),
      helperText: formik.touched.password && formik.errors.password,
    },
    {
      name: 'shir',
      onKeyPress: calculate,
      value: formik.values.shir,
      onChange: formik.handleChange,
      error: formik.touched.shir && Boolean(formik.errors.shir),
      helperText: formik.touched.shir && formik.errors.shir,
    },
  ];

  const results = [];

  return (
    <>
      <Row width={'100%'}>
        {/* <form
          style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center' }}
          onSubmit={formik.handleSubmit}
        >
          {fields.map((x) => (
            <InputCard text={'blah1'} {...x}></InputCard>
          ))}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>

        {results.map((x) => (
          <span>{x}</span>
        ))} */}
        <Formik
          enableReinitialize
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          initialValues={{ email: '', password: '', shir: '' }}
          validationSchema={validationSchema}
        >
          {() =>
            fields.map((x) => (
              <Form>
                <Row width={'100%'} alignItems={'center'} justifyContent={'center'}>
                  <Field fullWidth type={'number'} autoFocus {...x} component={TextField} />
                  <Tooltip title={'Share'}>
                    <IconButton type={'submit'} size={'small'}>
                      <Check />
                    </IconButton>
                  </Tooltip>
                </Row>
              </Form>
            ))
          }
        </Formik>
      </Row>
      <Button
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          borderRadius: '20px',
          maxWidth: '40px',
          minWidth: '40px',
          height: '40px',
        }}
        variant="contained"
      >
        +
      </Button>
    </>
  );
};
