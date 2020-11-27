export default function validateRegister(values) {
  let errors = {};

  //username//more than 0 characters
  if (!values.username) {
    errors.username = "*Username is required";
  }
  //email
  //need the string to be and email
  if (!values.email) {
    errors.email = "*Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "*Email address is invalid";
  }

  if (!values.password) {
    errors.password = "*Password is required";
  } else if (values.password.length < 5) {
    errors.password = "*Password needs to be atleast 5 characters";
  }

  return errors;
}

//username
//more than 0 characters
//email
//need the string to be and email
//password
//more than 5 char
