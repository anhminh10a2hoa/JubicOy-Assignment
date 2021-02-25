import React, { useEffect, useState } from 'react';
import './App.css';
import FormContainer from './containers/FormComponent';
import TableContainer from './containers/TableComponent';
import { getDataFromLocalStorage } from './controllers/TableController';
import { IForm } from './interfaces/IForm';

function App() {
  const [listData, setListData] = useState([] as Array<IForm>)
  useEffect(() => {
    setListData(getDataFromLocalStorage());
  }, [])

  return (
    <div className="App">
      <FormContainer />
      <TableContainer listData={listData}/>
    </div>
  );
}

export default App;
