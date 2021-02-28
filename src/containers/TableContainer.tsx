import React, { useEffect, useState } from 'react';
import TableComponent from '../components/table/TableComponent';
import { deleteDataFromLocalStorage, getAllDataFromLocalStorage } from '../controllers/TableController';
import { IForm } from '../interfaces/IForm';

const TableContainer = () => {
  const [listData, setListData] = useState([] as Array<IForm>)
  
  useEffect(() => {
    setListData(getAllDataFromLocalStorage());
  }, [])

  const onDelete = (index: number) => {
    setListData(deleteDataFromLocalStorage(index));
    window.location.reload();
  }

  return(
    <TableComponent listData={listData} onDelete={onDelete}/>
  )
}

export default TableContainer;