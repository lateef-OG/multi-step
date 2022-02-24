import { TaskInterface } from "../interfaces";

export const checkStatus = (arr: TaskInterface[]) => {
  return arr.every((item) => item.completed);
};