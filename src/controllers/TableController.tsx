import { IForm } from "../interfaces/IForm";

export function getAllDataFromLocalStorage(){
  const data: string | null = localStorage.getItem('data');
  if(data === null) {
    return [];
  }
  const listDataReturn: Array<IForm> = JSON.parse(data);
  return listDataReturn;
}

export function deleteDataFromLocalStorage(index: number){
  const data: string | null = localStorage.getItem('data');
  if(data !== null) {
    let newList = JSON.parse(data);
    newList.splice(index, 1);
    localStorage.setItem('data',JSON.stringify(newList))
    return newList;
  }
  return [];
}

export function getADataFromLocalStorage(index: number){
  const data: string | null = localStorage.getItem('data');
  if(data === null) {
    return [];
  }
  const listDataReturn: Array<IForm> = JSON.parse(data);
  const dataReturn = listDataReturn.splice(index, 1);
  return dataReturn;
}