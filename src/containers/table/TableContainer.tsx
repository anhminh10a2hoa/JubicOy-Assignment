import React, { useEffect, useState } from 'react';
import PopupComponent from '../../components/popup/PopupComponent';
import TableComponent from '../../components/table/TableComponent';
import { deleteDataFromLocalStorage, getADataFromLocalStorage, getAllDataFromLocalStorage } from '../../controllers/TableController';
import { IForm } from '../../interfaces/IForm';
import './TableContainerStyles.scss'

const TableContainer: React.FC = () => {
  const [listData, setListData] = useState([] as Array<IForm>)
  const [dataOnDetail, setDataOnDetail] = useState({} as IForm | null)
  const [isShowing, setIsShowing] = useState(false);
  
  useEffect(() => {
    setListData(getAllDataFromLocalStorage());
  }, [])

  const onDelete = (index: number) => {
    setListData(deleteDataFromLocalStorage(index));
    console.log(listData);
  }

  const onOpenDetail = (index: number) => {
    setDataOnDetail(getADataFromLocalStorage(index));
    setIsShowing(true);
  }

  const onCloseDetail = () => {
    setIsShowing(false);
  }

  return(
    <div className="table-container">
      <TableComponent listData={listData} 
                      onDelete={onDelete} 
                      onOpenDetail={onOpenDetail}
      />
      <PopupComponent isShowing={isShowing} data={dataOnDetail} onCloseDetail={onCloseDetail}/>
    </div>
  )
}

export default TableContainer;