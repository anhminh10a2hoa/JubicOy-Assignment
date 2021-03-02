import { IForm } from "../interfaces/IForm";

export function checkInputValidator(input: IForm): string {
  let errorMessage = "";
  if(input.name.length < 4){
    errorMessage += "Please enter your name at least 4 characters";
  }
  if(input.description.length < 10){
      errorMessage += "\nPlease enter your description at least 10 characters";
  }
  if(input.comment.length < 20){
    errorMessage += "\nPlease enter your comment at least 20 characters";
  }
  return errorMessage;
}