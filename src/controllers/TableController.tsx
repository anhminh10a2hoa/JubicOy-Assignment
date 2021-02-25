import { IForm } from "../interfaces/IForm";

const SEPERATE_ARRAY = "#$%";
const SEPERATE_VALUE = "^&^";
const SEPERATE_KEY = "!@%";

export function getDataFromLocalStorage(){
  const data: string | null = localStorage.getItem('data');
  if(data === null) {
    return [];
  }
  const listDataReturn: Array<IForm> = [];
  const arrayData = data.split(SEPERATE_ARRAY);
  const temp: string[][] = [];
  for(let i = 0; i < arrayData.length; i++){
    arrayData[i].split(SEPERATE_VALUE).map((data: string) => {
      temp.push(data.split(SEPERATE_KEY));
    })
    listDataReturn[i] = Object.fromEntries(temp);
  }
  return listDataReturn;
}