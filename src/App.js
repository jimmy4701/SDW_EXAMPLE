import React, { useState } from 'react'
import Button from './components/Button'

const App = (props) => {
  const [title, setTitle] = useState()
  const [message, setMessage] = useState()

  return(
    <div className="app-container">
      <h1>Composant APP</h1> 
      <p>Contenu du composant APP.</p>
      <Form onChange={(value) => {setTitle(value)}} />
      <Form onChange={(value) => {setMessage(value)}} />
      <h1>{title}</h1>
      <Displayer content={message} />
      <Button>Annuler</Button>
      <Button onClick={() => {alert("Validé !")}}>Valider</Button>
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

const Displayer = (props) => {
  return(
  <p>{props.content}</p>
  )
}

export default App