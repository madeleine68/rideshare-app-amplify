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
    carColor,
    licenceNum,
    licence,
    model,
  }
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [email.name]: '',
  [phone.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
  [category.name]: "",
  [year.name]: "",
  [make.name]:"",
  [kilometers.name]:"",
  [plateNum.name]:"",
  [carColor.name]:"",
  [licenceNum.name]:"",
  [licence.name]:"",
  [model.name]: "",
};
