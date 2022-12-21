import { Button, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { addTask, editTask } from '../data/data'
import useLoading from '../hooks/useLoading'
import useStoreControl from '../hooks/useStoreControl'



const Formulario = ({ setModal, data }) => {
  const { id, name, description, completed } = data
  const [nameTask, setNameTask] = useState(name ? name : '')
  const [descriptionTask, setDescriptionTask] = useState(description ? description : '')
  const { Loading, setOpen } = useLoading()
  const { getTask } = useStoreControl();



  const handleSubmit = () => {
    setOpen(true)

    if (id) {
      editTask(id, nameTask, descriptionTask, completed).then(e => {
        getTask()
        setOpen(false)
        Swal.fire({

          icon: 'success',
          title: 'la tarea se Ha Guardado con exito',
          showConfirmButton: true,
         
        })

        setModal(false)


      }).catch(e => console.error(e));

    } else {
      addTask(nameTask, descriptionTask).then(e => {
        getTask()
        setOpen(false)
        Swal.fire({

          icon: 'success',
          title: 'la tarea se Ha Guardado con exito',
          showConfirmButton: true,
        })
        setModal(false)


      }).catch(e => console.log(e));
    }

  }

  return (
    <>
      <Box component={Paper} className='form-container'>
        <h2> {id ? 'Edite la Tarea Seleccionada' : 'Ingrese Nueva Tarea'}</h2>

        <form className='form-task'>
          <TextField

            id="outlined-disabled"
            label="Titulo"
            value={nameTask}
            fullWidth
            onChange={e =>{e.target.value.length<50&& setNameTask(e.target.value)}}
          />
          <TextField
            id="outlined-disabled"
            label="Description"
            value={descriptionTask}
            multiline
            minRows={3}
            maxRows={3}
            fullWidth
            onChange={e => {e.target.value.length<190&&setDescriptionTask(e.target.value)}}
         

          />
          <Button fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={(nameTask && descriptionTask) ? false : true}
          >{id ? 'Guardar Cambios' : 'Añadir Nueva Tarea'}</Button>
        </form>
      </Box>
      <Loading />
    </>
  )
}

export default Formulario