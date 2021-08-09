import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string('הכנס שם פרטי').required('שם פרטי הינו שדה חובה*'),
  lastName: yup.string('הכנס שם משפחה').required('שם משפחה הינו שדה חובה*'),
  email: yup.string('הכנס מייל').email('הכנס כתובת מייל חוקית').required('מייל הינו שדה חובה*'),
});

export default validationSchema;
