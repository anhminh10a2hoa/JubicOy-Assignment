import { IForm } from "../interfaces/IForm";

export function postDataToLocalStorage(userInfo: IForm){
  const existData: string | null = localStorage.getItem('data');
  let list = existData ? JSON.parse(existData) : [];
  list.push(userInfo);
  localStorage.setItem('data', JSON.stringify(list));
}