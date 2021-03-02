import React, { useState } from 'react';
import FormComponent from '../../components/form/FormComponent';
import { postDataToLocalStorage } from '../../controllers/FormController';
import { IForm } from '../../interfaces/IForm';
import { checkInputValidator } from '../../utils/checkInputValidator';

const FormContainer = () => {
  const [userInfo, setUserInfo] = useState<IForm>({name: "", description: "", comment: ""});

  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserInfo(preState => ({ ...preState, [name]: value }));
  }

  const handleSubmit = (event: React.FormEvent) => {
    if(checkInputValidator(userInfo).length > 0){
      alert(checkInputValidator(userInfo));
      event.preventDefault();
    } else {
      postDataToLocalStorage(userInfo);
    }
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