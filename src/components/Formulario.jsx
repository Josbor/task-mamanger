import { Button, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { addTask } from '../data/data'
import useLoading from '../hooks/useLoading'
import useStoreControl from '../hooks/useStoreControl'



const Formulario = ({setModal}) => {
  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const {Loading,setOpen}=useLoading()
   
  useEffect(() => {
    
  
    return () => {
     
    }
  }, [])
  
  
  const handleSubmit=()=>{
        setOpen(true)
       addTask(name,description).then(e=>{
        setOpen(false)
        Swal.fire({
          
          icon: 'success',
          title: 'la tarea se Ha Guardado con exito',
          showConfirmButton: false,
          timer: 3000
        })
        setModal(false)
        
      
      }).catch(e=>console.log(e));

      
  }

  return (
    <>
        <Box component={Paper} className='form-container'>
            <h2> Ingrese Nueva Tarea</h2>
        
              <form className='form-task'>
                  <TextField
                      
                      id="outlined-disabled"
                      label="Titulo"
                      defaultValue={name}
                      fullWidth
                      onChange={e=>setName(e.target.value)}
                  />
                  <TextField
                      id="outlined-disabled"
                      label="Description"
                      defaultValue={description}
                      multiline
                      minRows={3}
                      maxRows={3}
                      fullWidth
                      onChange={e=>setDescription(e.target.value)}
                    
                  />
                   <Button fullWidth 
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={(name&&description)?false:true}
                            >Añadir Nueva Tarea</Button>
              </form>
        </Box>
        <Loading/>
    </>
  )
}

export default Formulario