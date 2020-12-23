import { useState } from 'react';
import { useStateValue } from '../../../../StateProvider/StateProvider';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

const useForm = (callBack, validate) => {
  let history = useHistory();
  const [state, dispatch] = useStateValue();
  const [values, setValues] = useState({ username: '', password: '' });
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
      dispatch({
        type: 'LOGIN',
        currentUser: {
          username: values.username,
          password: values.password,
        },
      });
    }
    setValues({
      username: '',
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
