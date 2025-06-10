import { useState } from 'react'

const Person = (props) => {
  return (
    <p>{props.name} {props.number}</p>
  )
}

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

const addPerson = (event) => {
  event.preventDefault()

  const nameExists = persons.some(person => person.name === newName)
  
  if (nameExists) {
    alert(`${newName} is already added to phonebook`)
  }

  else {
    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          Number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map( person =>
          <li key={person.name}>
            <Person key={person.name} name={person.name} number={person.number}/>
          </li>
        )}
      </ul>
    </div>
  )

}

export default App