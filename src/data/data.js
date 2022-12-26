import axios from "axios";
import config from './configApi.json'

const url =axios.create(
    {baseURL:config.baseUrl+'/api/'}
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

export const editTask= async (id,name,description,completed=false)=>{
   
    const response= await url.put(`tareas/${id}`,{
        name,
        description,
        completed
    }) 
    const result= await response;
    if (result.status!==200) throw result;
    return result.data;
   
}


export const deleteTask= async (id)=>{
   
    const response= await url.delete(`tareas/${id}`) 
    const result= await response;
    if (result.status!==200) throw result;
    return result;
   
}