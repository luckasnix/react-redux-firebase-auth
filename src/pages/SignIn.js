import React, { useState, useCallback } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'

function SignIn(props) {
  firebase
    .auth()
    .onAuthStateChanged(
      (user) => {
        if(user) {
          props.history.replace('/home')
        }
      }
    )
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
  const signInUser = useCallback(
    (evt) => {
      evt.preventDefault()
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
    },
    [email, password]
  )
  return (
    <div>
      <NavLink to='/'>Voltar</NavLink>
      <form onSubmit={signInUser}>
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
          value='Entrar'
        />
      </form>
    </div>
  )
}

export default withRouter(SignIn)