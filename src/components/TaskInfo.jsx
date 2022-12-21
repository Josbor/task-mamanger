import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const TaskInfo = ({data,setModal}) => {
  return (
    <Box className='details-modal-container '>
        <div className={data.completed?'header-modal-name color-Info-done':'header-modal-name color-Info-pending'}>
            <h1>
            {data.name}
            </h1>
            
                </div>
        <div className='header-modal-description'>
                
                {data.description}
            
        </div>
        <div className={data.completed?'footer-modal-status status-modal-done':'footer-modal-status status-modal-pending'}>
            
            {data.completed?<CheckCircleOutlineIcon className='icon-done' sx={{display:{sm:'inherit',md:'inherit'}}}/>:<ReportGmailerrorredIcon className='icon-pending' sx={{display:{sm:'inherit',md:'inherit'}}}/>}
            <h3>{data.completed?'Completada':'Pendiente'}</h3>
            
        </div>
    </Box>
  )
}

export default TaskInfo     