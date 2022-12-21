import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const FilterTask = ({ tasks, setDataFiltered }) => {

  const [dropTask, setDropTask] = useState('')

  const [textField, setTextField] = useState('')
  useEffect(() => {
    if (dropTask == 1) {
      let filtered = tasks
      if (textField) filtered = filtered.filter(task => task.name.toLowerCase().search(textField.toLowerCase()) !== -1 ? true : false)
      setDataFiltered(filtered);
    }
    if (dropTask == 2) {

      let filtered = tasks.filter(({ completed }) => completed == true)
      if (textField) filtered = filtered.filter(task => task.name.toLowerCase().search(textField.toLowerCase()) !== -1 ? true : false)
      setDataFiltered(filtered)
    }
    if (dropTask === 3) {

      let filtered = tasks.filter(({ completed }) => completed == false)
      if (textField) filtered = filtered.filter(task => task.name.toLowerCase().search(textField.toLowerCase()) !== -1 ? true : false)
      setDataFiltered(filtered)
    }


    if (!dropTask) setDataFiltered(tasks)

  }, [tasks])

  const handleSelect = (e) => {
    setDropTask(e)


    if (e == 1) {
      let filtered = tasks;
      if (textField) filtered = tasks.filter(task => task.name.toLowerCase().search(textField.toLowerCase()) !== -1 ? true : false)
      setDataFiltered(filtered);
    }
    if (e == 2) {

      let filtered = tasks.filter(({ completed }) => completed == true)
      if (textField) filtered = filtered.filter(task => task.name.toLowerCase().search(textField.toLowerCase()) !== -1 ? true : false)
      setDataFiltered(filtered)
    }
    if (e === 3) {

      let filtered = tasks.filter(({ completed }) => completed == false)
      if (textField) filtered = filtered.filter(task => task.name.toLowerCase().search(textField.toLowerCase()) !== -1 ? true : false)
      setDataFiltered(filtered)
    }


  }

  const handleTextField = (param) => {
    setTextField(param)
    if (param !== '') {
      let filtered = tasks.filter(task => task.name.toLowerCase().search(param.toLowerCase()) !== -1 ? true : false)
      if (dropTask) {
        if (dropTask == 2) {

          filtered = filtered.filter(({ completed }) => completed == true)
          setDataFiltered(filtered)
        }
        if (dropTask === 3) {

          filtered = filtered.filter(({ completed }) => completed == false)
        }
      }

      setDataFiltered(filtered)
    } else {
      if (dropTask == '') setDataFiltered(tasks)
      if (dropTask == 1) { setDataFiltered(tasks); }
      if (dropTask == 2) {

        const filtered = tasks.filter(({ completed }) => completed == true)
        setDataFiltered(filtered)
      }
      if (dropTask === 3) {

        const filtered = tasks.filter(({ completed }) => completed == false)
        setDataFiltered(filtered)
      }

    }
  }

  const handleReset = () => {
    setDropTask('');
    setTextField('');
    setDataFiltered(tasks);
  }
  return (
    <div>
      <Box className='filter-container'>

       
          <TextField
            fullWidth
            className='textField-Task'
            id="outlined-disabled"
            label="Titulo"
            value={textField}
            variant='outlined' 
            onChange={e => handleTextField(e.target.value)}
            sx={{ minWidth: 200 }}

          />
        
        
          <FormControl className='filter-field' sx={{color:'white'}} variant='outlined' >
            <InputLabel id="demo-simple-select-label">Filtrar por</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"

              value={dropTask}
              label="filtro"
              onChange={(e) => handleSelect(e.target.value)}
              sx={{ minWidth: 200 }}
            >
              <MenuItem value={1}>Todas</MenuItem>
              <MenuItem value={2}>Terminadas</MenuItem>
              <MenuItem value={3}>Pendientes</MenuItem>

            </Select>
          </FormControl>
        
        <div>
          <Button variant='outlined' onClick={handleReset}>resetar</Button>
        </div>
      </Box>
    </div>
  )
}




export default FilterTask