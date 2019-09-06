import React, { useState, useEffect, useCallback } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

function Home(props) {
  firebase
    .auth()
    .onAuthStateChanged(
      (user) => {
        if(!user) {
          props.history.replace('/')
        }
      }
    )
  const signOutUser = useCallback(
    () => {
      firebase
        .auth()
        .signOut()
    },
    []
  )
  const [data, setData] = useState(null)
  useEffect(
    () => {
      firebase
        .firestore()
        .collection('posts')
        .get()
        .then(
          (snapshot) => {
            setData(snapshot.docs)
          }
        )
    },
    []
  )
  return (
    <div>
      <button onClick={signOutUser}>Sair</button>
      <NavLink to='/publish'>Publicar</NavLink>
      {
        data && data.map(
          (cur) => {
            const curData = cur.data()
            return (
              <div key={curData.title}>
                <h1>{curData.title}</h1>
                <p>{curData.content}</p>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default withRouter(Home)