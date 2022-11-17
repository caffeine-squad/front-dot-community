import { api } from "./api"

const getAll = () =>{
  api.get('/user');
}
export const TodoService ={
  getAll,
}