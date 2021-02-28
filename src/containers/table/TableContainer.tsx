import React, { useEffect, useState } from 'react';
import PopupComponent from '../../components/popup/PopupComponent';
import TableComponent from '../../components/table/TableComponent';
import { deleteDataFromLocalStorage, getADataFromLocalStorage, getAllDataFromLocalStorage } from '../../controllers/TableController';
import { IForm } from '../../interfaces/IForm';
import './TableContainerStyles.scss'

const TableContainer = () => {
  const [listData, setListData] = useState([] as Array<IForm>)
  const [dataOnDetail, setDataOnDetail] = useState({} as IForm | null)
  const [isShowing, setIsShowing] = useState(false);
  
  useEffect(() => {
    setListData(getAllDataFromLocalStorage());
  }, [])

  const onDelete = (index: number) => {
    setListData(deleteDataFromLocalStorage(index));
    window.location.reload();
  }

  const onOpenDetail = (index: number, isShowng: boolean) => {
    setDataOnDetail(getADataFromLocalStorage(index));
    console.log(dataOnDetail);
    setIsShowing(isShowng);
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