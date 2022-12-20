import {useEffect, useId, useState } from 'react'
import useStoreControl from '../hooks/useStoreControl'
import Task from '../components/Task'
import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import useModal from '../hooks/useModal';
import Formulario from '../components/formulario';

const Home = () => {
    const {tasksList,getTask}=useStoreControl()
    const [setModal,Modal]=useModal()

    useEffect(() => {
      getTask()
     
      
    }, [])
    const handleAddtask=()=>{
        console.log('aparecera un modal')
        setModal(true)
    }
    return (
        
    <div className="App">
    {tasksList&&tasksList.map(e=>
      <Task key={e.id} data={e}/>
      
      )}
       <Tooltip title='crear nueva Tarea'>

        <Fab color="primary"
        aria-label="add"
        sx={{ position: 'absolute', bottom: { xs: 15, sm: 25, md: 35, lg: 45, xl: 55 }, right: { xs: 15, sm: 25, md: 35, lg: 45, xl: 55 } }}
        size='large'
        onClick={handleAddtask}>
        <AddIcon />
      </Fab>  
          </Tooltip>
      <Modal Component={Formulario}/>
</div>
  )
}

export default Home