import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import {CreateNewForm} from '../../../components/FormCard';

export const CreateNewSong = () => {
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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      shir: '',
      field1: '',
      field2: '',
      field3: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <CreateNewForm onSubmit={formik.handleSubmit}>
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
    </CreateNewForm>
  );
};
