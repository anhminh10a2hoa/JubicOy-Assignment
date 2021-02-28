import React from 'react';
import { IForm } from '../../interfaces/IForm';
import './TableStyles.scss';

type TableComponentProps = {
  listData: Array<IForm>,
  onDelete: (index: number) => void,
  onOpenDetail: (index: number, show: boolean) => void,
}

const TableComponent: React.FC<TableComponentProps> = ({listData, onDelete, onOpenDetail}): JSX.Element => {
  return(
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        {listData.length > 0 ? listData.map((data: IForm, i) => (
        <tbody key={i}>
          <tr>
            <td width={'20%'}>{data.name}</td>
            <td width={'60%'}>{data.description}</td>
            <td width={'20%'}>
              <button onClick={() => onDelete(i)}>Delete</button>
              <button onClick={() => onOpenDetail(i, true)}>Details</button>
            </td>
          </tr>
        </tbody>
        )) : (
          <tbody>
            <tr>
              <td colSpan={3} >Empty data</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}

export default TableComponent;