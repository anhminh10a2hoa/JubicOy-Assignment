import React from 'react';
import './PopupStyles.scss';

type PopupComponentProps = {
  data: any,
  isShowing: boolean,
  onCloseDetail: () => void
}

const PopupComponent: React.FC<PopupComponentProps> = ({isShowing, data, onCloseDetail}): JSX.Element => {
  return(
    data ? (
      <div className="popup" style={{display: isShowing ? 'block' : 'none'}}>
        <p><b>Name: </b>{data.name}</p>
        <p><b>Description: </b>{data.description}</p>
        <p><b>Comment: </b>{data.comment}</p>
        <button onClick={onCloseDetail}>Close</button>
      </div>
    ) : (
      <p>Data does not exsit!!!</p>
    )
  )
}

export default PopupComponent;