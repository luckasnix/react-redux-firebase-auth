import React from 'react'
import { NavLink } from 'react-router-dom'

function Main() {
  return (
    <div>
      <NavLink to='/signin'>Entrar</NavLink>
      <NavLink to='/signup'>Criar conta</NavLink>
    </div>
  )
}

export default Main