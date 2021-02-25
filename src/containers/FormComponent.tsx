import React, { useState } from 'react';
import FormComponent from '../components/form/FormComponent';
import { postDataToLocalStorage } from '../controllers/FormController';
import { IForm } from '../interfaces/IForm';

const FormContainer = () => {
  const [userInfo, setUserInfo] = useState({name: "", description: "", comment: ""} as IForm);

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserInfo(preState => ({ ...preState, [name]: value }));
  }

  const handleSubmit = () => {
    postDataToLocalStorage(userInfo);
  }

  const handleClear = () => {
    setUserInfo({name: "", description: "", comment: ""});
  }

  return(
    <FormComponent 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClear={handleClear}
      userInfo={userInfo}
    />
  )
}

export default FormContainer;