import React, { useEffect, useState } from 'react'

const HeaderTasks = ({data}) => {
  const [pending, setPending] = useState('')
  const [done, setDone] = useState('')
  
  useEffect(() => {
    if(data){
    const pending=data.filter(e=>e.completed==false)
    const done=data.filter(e=>e.completed==true)
    setPending(pending.length)
    setDone(done.length)
  }
    
  }, [data])
  
    return (
    <div className='container-header-home'>
        <div className='header-pending'>
            <h3>Tareas Pendientes</h3>
            <h2>{pending}</h2>
        </div>
        <div  className='header-done'>
            
            <h3>Tareas Completas</h3>  
            <h2>{done}</h2>
        </div>
    </div>
  )
}

export default HeaderTasks