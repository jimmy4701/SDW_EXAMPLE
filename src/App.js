import React, { useState } from 'react'
import Button from './components/Button'
import Displayer from './components/Displayer'

const App = (props) => {
  const [title, setTitle] = useState()
  const [message, setMessage] = useState()

  const messages = [
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
      <Displayer messages={messages} />
    </div>
  )
}

const Form = (props) => {
  return(
    <form>
      <input type="text" onChange={(event) => {
        props.onChange(event.target.value)
      }} />
    </form>
  )
}

export default App