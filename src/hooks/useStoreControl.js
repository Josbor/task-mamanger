import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteTask, getAllTask } from '../data/data'
import { getListTask } from '../features/taskSlice'



const useStoreControl = () => {
  const tasksList= useSelector((state) => state.tasks.value)
  const [tareas, setTareas] = useState()
  const dispatch=useDispatch()


  
  const getTask = async () => {
    const task = await getAllTask()
    dispatch(getListTask(task))
    setTareas(task)
  }
  const destroyTask=async(id)=>{
    const response= await deleteTask(id);
    if (response.status==200){
      Swal.fire(
        'Borrado!',
        'Tu Tarea ha Sido eliminada.',
        'success'
      )}
      await getTask();
   
     return true
  }

  return {tasksList,tareas,getTask,destroyTask}
}

export default useStoreControl