import React, { useState, useCallback } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

function Register(props) {
  const [email, setEmail] = useState('')
  const handleEmailChange = useCallback(
    (evt) => {
      setEmail(evt.target.value)
    },
    [setEmail]
  )
  const [password, setPassword] = useState('')
  const handlePasswordChange = useCallback(
    (evt) => {
      setPassword(evt.target.value)
    },
    [setPassword]
  )
  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault()
      props.history.replace('/home')
    },
    [props.history]
  )
  return (
    <div>
      <NavLink to='/'>Voltar</NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={email}
          onChange={handleEmailChange}
          placeholder='user@email.com'
          maxLength={20}
        />
        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='pass1234'
          maxLength={20}
        />
        <input
          type='submit'
          value='Cadastrar'
        />
      </form>
    </div>
  )
}

export default withRouter(Register)