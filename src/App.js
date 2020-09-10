import React, { useState } from 'react'
import Button from './components/Button'
import Displayer from './components/Displayer'

const App = (props) => {
  const [title, setTitle] = useState()
  const [message, setMessage] = useState()

  const discuss = [
    {
        username: "Bob",
        content: "Salut",
        type: "A"
    },
    {
        username: "Alice",
        content: "Salut ca va ?",
        type: "B"
    }
  ]

  return(
    <div className="app-container">
      <h1>Messagerie</h1>
      <Displayer messages={discuss} />
    </div>
  )
}

const Form = (props) => {
  const [content, setContent] = useState()
  return(
    <form>
      <input type="text" value={content} onChange={(event) => {
        setContent(event.target.value)
      }} />
    </form>
  )
}

export default App