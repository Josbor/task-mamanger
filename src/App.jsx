import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getAllTask } from './data/data'
import useStoreControl from './hooks/useStoreControl'


function App() {
  const {tareas,getTask}=useStoreControl()
  useEffect(() => {
    getTask()
  
    
  }, [])
  
  return (
    <div className="App">
        {tareas&&tareas.map(e=>
          <p>{e.titulo}</p>
          
          )}
    </div>
  )
}

export default App
