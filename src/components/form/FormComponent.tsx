import React from 'react';
import { IForm } from '../../interfaces/IForm';
import './FormStyles.scss';

type FormComponentProps = {
  handleSubmit: () => void,
  handleChange: (event: any) => void,
  handleClear: (event: any) => void,
  userInfo: IForm
}

const FormComponent = ({ handleChange, handleSubmit, handleClear, userInfo }: FormComponentProps) => {
  const { name, description, comment } = userInfo;
  return(
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='name-and-description-container'>
          <label className='name-label'>
            Name
            <input className='name-input' type="text" name="name" value={name} onChange={handleChange}/>
          </label>
          <label className='description-label'>
            Description
            <input className='description-input' type="text" name="description" value={description} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label className='comment-label'>
            Comment
            <input className='comment-input' type="text" name="comment" value={comment} onChange={handleChange}/>
          </label>
        </div>
        <div className='button-container'>
          <button onClick={handleClear}>Clear</button>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent;