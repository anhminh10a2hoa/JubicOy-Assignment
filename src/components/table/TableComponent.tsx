import React from 'react';
import { IForm } from '../../interfaces/IForm';
import './TableStyles.scss';

type TableComponentProps = {
  listData: Array<IForm>,
  onDelete: (index: number) => void
}

const TableComponent: React.FC<TableComponentProps> = ({listData, onDelete}): JSX.Element => {

  const onDetail = (index: number) => {
    // return index;
  }

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
        {listData.length > 0 && listData.map((data: IForm, i) => (
        <tbody key={i}>
          <tr>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>
              <button onClick={() => onDelete(i)}>Delete</button>
              <button onClick={() => onDetail(i)}>Details</button>
            </td>
          </tr>
        </tbody>
        ))}
      </table>
    </div>
  )
}

export default TableComponent;