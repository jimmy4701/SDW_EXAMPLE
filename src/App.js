import React, { useState } from 'react'
import Button from './components/Button'
import Displayer from './components/Displayer'

const App = (props) => {
  const [discuss, setDiscuss] = useState([])

  const handleMessage = (new_message) => {
    setDiscuss([...discuss, new_message])
  }

  return(
    <div className="app-container">
      <h1>Messagerie</h1>
      <Displayer messages={discuss} />
      <Form onMessage={(mess) => alert(mess.content)} username="Bob" type="A" />
      <Form onMessage={handleMessage} username="Alice" type="B" />
    </div>
  )
}

const Form = (props) => {
  const [content, setContent] = useState()

  const sendMessage = (e) => {
    e.preventDefault()
    props.onMessage({
      username: props.username,
      content,
      type: props.type
    })
    setContent("")
  }
  return(
    <form onSubmit={sendMessage}>
      <input type="text" value={content} placeholder={`Formulaire pour ${props.username}`} 
        onChange={(event) => {
          setContent(event.target.value)
        }} />
      <Button onClick={sendMessage}>Envoyer</Button>
    </form>
  )
}

export default App