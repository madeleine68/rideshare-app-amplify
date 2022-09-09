import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    email,
    phone,
    password,
    confirmPassword,
    category,
    year,
    make,
    kilometers,
    plateNum,
    licenceNum,
    licence,
    model,
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [email.name]: Yup.string().email('Invalid email address format').required(`${email.requiredErrorMsg}`),

    [phone.name]: Yup.string()
    .required(`${phone.requiredErrorMsg}`)
    .test('len', `${phone.invalidErrorMsg}`, val => val && val.length === 10),

    [city.name]: Yup.string()
    .nullable()
    .required(`${city.requiredErrorMsg}`),

    [password.name]: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Password is required"),

    [confirmPassword.name]: Yup.string().required()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),

      }),
  Yup.object().shape({
    [make.name]: Yup.string().required(""),
    [plateNum.name]: Yup.string().required(),
    [licenceNum.name]: Yup.string().required(),
    [model.name]: Yup.string().required(),
    [year.name]: Yup.string().required(),
    [kilometers.name]: Yup.string().required(),
    [category.name]: Yup.string().required(),
  })
    
];
