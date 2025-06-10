import { useState } from 'react'

const Person = (props) => {
  return (
    <p>{props.name} {props.number}</p>
  )
}

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
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

const filterPersons = (newFilter) => {
  return persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        Filter results: <input
                          value={newFilter}
                          onChange={handleFilterChange}
                        />
      </form>
      <h2>Add a new contact</h2>
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
        {filterPersons(newFilter).map( person =>
          <li key={person.name}>
            <Person key={person.name} name={person.name} number={person.number}/>
          </li>
        )}
      </ul>
    </div>
  )

}

export default App