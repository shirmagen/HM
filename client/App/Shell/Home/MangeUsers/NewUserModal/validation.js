import * as yup from 'yup';

const validationSchema = yup.object({
  first: yup.string('הכנס שם פרטי').required('שם פרטי הינו שדה חובה*'),
  last: yup.string('הכנס שם משפחה').required('שם משפחה הינו שדה חובה*'),
  username: yup.string('הכנס שם משתמש').required('שם משתמש הינו שדה חובה*'),
  email: yup.string('הכנס מייל').email('הכנס כתובת מייל חוקית').required('מייל הינו שדה חובה*'),
  password: yup
    .string('הכנס סיסמא')
    .min(8, ' מינימום שמונה תווים')
    .required('סיסמא הינו שדה חובה*'),
  rePassword: yup.string().oneOf([yup.ref('password'), null], 'סיסמאות חייבות להיות זהות'),
  isLeader: yup.bool('is the new user leader?'),
});

export default validationSchema;
