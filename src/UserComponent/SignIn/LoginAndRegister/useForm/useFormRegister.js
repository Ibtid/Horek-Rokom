import { useState } from 'react';
import { useStateValue } from '../../../../StateProvider/StateProvider';
import { useHistory } from 'react-router-dom';
import Service from '../../../../services/services';

const useForm = (callBack, validate) => {
  let history = useHistory();
  const [state, dispatch] = useStateValue();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //handling errors
    setErrors(validate(values));
    //callBack();
    if (Object.keys(errors).length === 0) {
      var data = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      Service.addNewUser(data).then((response) => {
        dispatch({
          type: 'Register_User',
          registeredUser: {
            custID: response.data.custID,
            username: response.data.username,
            email: response.data.email,
            password: response.data.password,
          },
        });
      });
    }
    setValues({
      username: '',
      email: '',
      password: '',
    });
    history.push('/');
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
