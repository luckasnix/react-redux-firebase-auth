import React, { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore'

function Publish() {
  const [title, setTitle] = useState('')
  const handleTitleChange = useCallback(
    (evt) => {
      setTitle(evt.target.value)
    },
    [setTitle]
  )
  const [content, setContent] = useState('')
  const handleContentChange = useCallback(
    (evt) => {
      setContent(evt.target.value)
    },
    [setContent]
  )
  const publish = useCallback(
    (evt) => {
      evt.preventDefault()
      firebase
        .firestore()
        .collection('posts')
        .add(
          {
            title: title,
            content: content
          }
        )
        .then(
          () => {
            window.alert('Publicado com sucesso!')
          }
        )
        .catch(
          () => {
            window.alert('Erro ao publicar!')
          }
        )
        .finally(
          () => {
            setTitle('')
            setContent('')
          }
        )
    },
    [title, setTitle, content, setContent]
  )
  return (
    <div>
      <NavLink to='/home'>Home</NavLink>
      <form onSubmit={publish}>
        <input
          type='text'
          value={title}
          onChange={handleTitleChange}
          placeholder='Título'
          maxLength={40}
        />
        <textarea
          value={content}
          onChange={handleContentChange}
        />
        <input
          type='submit'
          value='Publicar'
        />
      </form>
    </div>
  )
}

export default Publish