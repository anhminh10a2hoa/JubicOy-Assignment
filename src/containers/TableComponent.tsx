import React from 'react';
import TableComponent from '../components/table/TableComponent';
import { IForm } from '../interfaces/IForm';

type TableContainerProps = {
  listData: Array<IForm>
}

const TableContainer = ({listData}: TableContainerProps) => {
  return(
    <TableComponent listData={listData}/>
  )
}

export default TableContainer;