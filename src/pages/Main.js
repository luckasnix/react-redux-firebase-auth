import React from 'react'
import { NavLink } from 'react-router-dom'

function Main() {
  return (
    <div>
      <NavLink to='/login'>Entrar</NavLink>
      <NavLink to='/register'>Criar conta</NavLink>
    </div>
  )
}

export default Main