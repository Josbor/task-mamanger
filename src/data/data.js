import axios from "axios";
import config from './configApi.json'

const url =axios.create(
    {baseURL:"http://127.0.0.1:8000/api"}
)


export const getAllTask= async ()=>{
    try   { 
    const response= await url.get('tareas') 
    const result= await response;
    if (result.status!==200) throw result;
    return result.data;
    }catch (error){
        console.log(error)
        throw error

    } 
}