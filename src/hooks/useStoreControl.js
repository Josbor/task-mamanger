import React, { useState } from 'react'
import { getAllTask } from '../data/data'



const useStoreControl = () => {
  const [tareas, setTareas] = useState()
  
  const getTask = async () => {
    const task = await getAllTask()
    setTareas(task)
  }


  return {tareas,getTask}
}

export default useStoreControl