import {useEffect, useId, useState } from 'react'
import useStoreControl from '../hooks/useStoreControl'
import Task from '../components/Task'
import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import useModal from '../hooks/useModal';
import Formulario from '../components/Formulario';
import FilterTask from '../components/FilterTask';
import HeaderTasks from '../components/HeaderTasks';


const Home = () => {
    const {tasksList,getTask}=useStoreControl()
    const [setModal,Modal]=useModal()
    const [dataFiltered,setDataFiltered]=useState([])

    useEffect(() => {
      getTask()
     
      
    }, [])
    const handleAddtask=()=>{
        console.log('aparecera un modal')
        setModal(true)
    }
    return (
        
    <div className="App">
         <div className='header-home-container'>
          <HeaderTasks data={tasksList}/>
          <FilterTask tasks={tasksList} setDataFiltered={setDataFiltered} dataFiltered={dataFiltered}/>
          </div> 
        
        <div className='container-tasks'>

          {dataFiltered.length>0 && dataFiltered.map(e =>
            <Task key={e.id} data={e} />

          )}
        </div>
       <Tooltip title='crear nueva Tarea'>
      
        <Fab color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: { xs: 15, sm: 25, md: 35, lg: 45, xl: 55 }, right: { xs: 15, sm: 25, md: 35, lg: 45, xl: 55 } }}
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