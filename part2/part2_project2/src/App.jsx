import { useState } from 'react'

const Person = (props) => {
  return (
    <p>{props.name}</p>
  )
}

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

const addName = (event) => {
  event.preventDefault()
  
  const nameExists = persons.some(person => person.name === newName)
  
  if (nameExists) {
    alert(`${newName} is already added to phonebook`)
  }

  else {
    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }
}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map( person =>
          <Person key={person.name} name={person.name}/>
        )}
      </ul>
    </div>
  )

}

export default App