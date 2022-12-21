import { Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Paper, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react'
import useModal from '../hooks/useModal';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InfoIcon from '@mui/icons-material/Info';
import Formulario from './Formulario'
import useStoreControl from '../hooks/useStoreControl';
import Swal from 'sweetalert2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Tooltip from '@mui/material/Tooltip';
import { editTask } from '../data/data';
import TaskInfo from './TaskInfo';

const Task = ({ data }) => {
  const [setModaltask, ModalTask] = useModal()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [TypeAction, setTypeAction] = useState('form')
  const open = Boolean(anchorEl);
  const {destroyTask,getTask}=useStoreControl()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTaskInfo = () => {
    setTypeAction('info')
    setModaltask(true)
  }

  const handleState=()=>{
    editTask(data.id, data.name,data.description, data.completed?false:true).then(e => {
      getTask()
      
      Swal.fire({

        icon: !data.completed?'success':'warning',
        title: !data.completed?'Se ha marcado como completada 😄!':'Se ha marcado como Pendiente 😥! ',
        showConfirmButton: true,
       
      })

     


    }).catch(e => console.error(e));


  }

  const handleDestroy= async()=>{
    if(data.id){
      Swal.fire({
        title: 'Estas Segur@?',
        text: "No podras revertirlo una vez realizado",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        //cuando sea positivo
        if (result.isConfirmed) {
          destroyTask(data.id)
        }
      })
    }
  }
  return (
    <>
      <Box component={Paper} className='task-container' >

        <div className={`header-container ${data.completed?'border-done':'border-pending'}`}>
          <div className='color-status'>
          {data.completed?<CheckCircleOutlineIcon className='icon-done' sx={{display:{sm:'inherit',md:'inherit'}}}/>:<ReportGmailerrorredIcon className='icon-pending' sx={{display:{sm:'inherit',md:'inherit'}}}/>}
          </div>
          <div>{data.name}</div>
          {/* ONLY DESKTOP */}
          <div className='menu-desktop'>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              className=''
            >

              <MoreVertIcon fontSize='small' />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}

              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  padding:0,
                  width:50,
                  position:'relative',
                                  
                },
              }}
            >
               {/* VER  */}
              <MenuItem onClick={()=>{handleClose();handleTaskInfo()}}>
                
                <ListItemIcon>
                 <Tooltip title='ver contenido de la tarea'>
                  <InfoIcon fontSize="small" />
                  </Tooltip> 
                </ListItemIcon>
                {/* <ListItemText>detalles</ListItemText> */}
              {/* EDITAR */}
              </MenuItem>
              <MenuItem onClick={()=>{handleClose();setTypeAction('form');setModaltask()}}>
             
                <ListItemIcon>
                <Tooltip title='editar Tarea'>
                  <BorderColorIcon fontSize="small" />
                </Tooltip>
                </ListItemIcon>
                {/* <ListItemText>editar</ListItemText> */}
              {/* BORRAR */}
              </MenuItem>
              <MenuItem onClick={()=>{handleClose(); handleDestroy()}}>
                <ListItemIcon>
                <Tooltip title='Eliminar Tarea'>

                  <DeleteIcon fontSize="small" />
                </Tooltip>
                </ListItemIcon>
                {/* <ListItemText>borrar</ListItemText> */}
              </MenuItem>
              <MenuItem onClick={()=>{handleClose(); handleState()}}>
                <ListItemIcon>
                  {!data.completed?
                <Tooltip title='marcar como terminada'>  
                  <CheckCircleIcon fontSize="small" />
                </Tooltip>
                : 
                    <Tooltip title='marcar como pendiente'>
                      <ErrorOutlineIcon fontSize="small"  />
                      
                    </Tooltip>
                  }
                </ListItemIcon>
                {/* <ListItemText>cambiar a terminada</ListItemText> */}
              </MenuItem>
            </Menu>
          </div>
          
        </div>
        <div className='description-task'>{data.description.length>70?data.description.slice(1,70)+'...':data.description}</div>

      </Box>
      <ModalTask Component={TypeAction=='form'?Formulario:TaskInfo} propsComponent={data}></ModalTask>
    </>
  )
}

export default Task