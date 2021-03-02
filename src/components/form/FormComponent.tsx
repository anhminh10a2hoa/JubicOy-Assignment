import React from 'react';
import { IForm } from '../../interfaces/IForm';
import './FormStyles.scss';

type FormComponentProps = {
  handleSubmit: (event: React.FormEvent) => void,
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void,
  handleClear: () => void,
  userInfo: IForm,
}

const FormComponent: React.FC<FormComponentProps> = ({ handleChange, handleSubmit, handleClear, userInfo }: FormComponentProps): JSX.Element => {
  const { name, description, comment } = userInfo;
  return(
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <div className='name-container'>
          <label className='name-label'>Name</label><br />
          <input className='name-input' type="text" name="name" value={name} onChange={handleChange}/>
        </div>
        <div className='description-container'>
          <label className='description-label'>Description</label><br />
          <input className='description-input' type="text" name="description" value={description} onChange={handleChange}/>
        </div>
        <div className='comment-container'>
          <label className='comment-label'>Comment</label><br />
          <input className='comment-input' type="text" name="comment" value={comment} onChange={handleChange}/>
        </div>
        <div className='button-container'>
          <button type='button' onClick={handleClear}>Clear</button>
          <button type='submit'>Add</button>
        </div>
      </div>
    </form>
  )
}

export default FormComponent;