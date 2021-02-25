import React from 'react';
import { IForm } from '../../interfaces/IForm';

type TableComponentProps = {
  listData: Array<IForm>
}

const TableComponent = ({listData}: TableComponentProps) => {
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      {listData.map((data: IForm, i) => (
      <tbody key={i}>
        <tr>
          <td>{data.name}</td>
          <td>{data.description}</td>
        </tr>
      </tbody>
      ))}
    </table>
  )
}

export default TableComponent;