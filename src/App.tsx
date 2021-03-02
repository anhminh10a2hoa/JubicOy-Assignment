import React from 'react';
import './App.css';
import FormContainer from './containers/form/FormContainer';
import TableContainer from './containers/table/TableContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Simple Form</h1>
      <FormContainer />
      <TableContainer />
    </div>
  );
}

export default App;
