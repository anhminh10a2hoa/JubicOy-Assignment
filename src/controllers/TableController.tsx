import { IForm } from "../interfaces/IForm";

export function getAllDataFromLocalStorage(): Array<IForm>{
  const data: string | null = localStorage.getItem('data');
  if(data === null) {
    return [];
  }
  const listDataReturn: Array<IForm> = JSON.parse(data);
  return listDataReturn;
}

export function deleteDataFromLocalStorage(index: number): Array<IForm>{
  const data: string | null = localStorage.getItem('data');
  if(data === null) {
    return [];
  }
  let newList = JSON.parse(data);
    newList.splice(index, 1);
    localStorage.setItem('data',JSON.stringify(newList))
    return newList;
}

export function getADataFromLocalStorage(index: number): IForm | null{
  const data: string | null = localStorage.getItem('data');
  if(data === null) {
    return null;
  }
  const listDataReturn: Array<IForm> = JSON.parse(data);
  const dataReturn = listDataReturn.splice(index, 1)[0];
  return dataReturn;
}