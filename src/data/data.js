import axios from "axios";
import config from './configApi.json'

const url =axios.create(
    {baseURL:"http://127.0.0.1:8000/api"}
)


export const getAllTask= async ()=>{
 
    const response= await url.get('tareas') 
    const result= await response;
    if (result.status!==200) throw result;
    return result.data;
  
  
}

export const addTask= async (name,description,completed=false)=>{
   
    const response= await url.post('tareas',{
        name,
        description,
        completed
    }) 
    const result= await response;
    if (result.status!==200) throw result;
    return result.data;
   
}