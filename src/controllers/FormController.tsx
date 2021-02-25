import { IForm } from "../interfaces/IForm";

const SEPERATE_ARRAY = "#$%";
const SEPERATE_VALUE = "^&^";
const SEPERATE_KEY = "!@%";

export function postDataToLocalStorage(userInfo: IForm){
  const existData: string | null = localStorage.getItem('data');
  const newData = existData && existData.length > 0  
                ? existData + SEPERATE_ARRAY + "name" + SEPERATE_KEY + userInfo.name 
                + SEPERATE_VALUE + "description" + SEPERATE_KEY + userInfo.description 
                + SEPERATE_VALUE + "comment" + SEPERATE_KEY + userInfo.comment 
                : "name" + SEPERATE_KEY + userInfo.name 
                + SEPERATE_VALUE + "description" + SEPERATE_KEY + userInfo.description 
                + SEPERATE_VALUE + "comment" + SEPERATE_KEY + userInfo.comment
  localStorage.setItem('data', newData);
}