import { useState, useEffect } from 'react'
import personService from './services/persons'

const Person = (props) => {
  return (
    <p>{props.name} {props.number}</p>
  )
}

const FilterForm = ({ newFilter, handleFilterChange }) => {
  return (
    <form>
      Filter results: <input
        value={newFilter}
        onChange={handleFilterChange}
      />
    </form>
  )
}

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
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
        <button type="submit">Add contact</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, deletePerson }) => {
  return (
    <ul>
      {persons.map(person =>
        <li key={person.name}>
          <Person name={person.name} number={person.number} />
          <Remove name={person.name} deletePerson={deletePerson} id={person.id}/>
        </li>
      )}
    </ul>
  )
}

const Remove = ({ id, deletePerson }) => {
  return (
    <button onClick={() => deletePerson(id)}>Delete</button>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    const confirm = window.confirm(`Delete ${person.name}?`)

    if (confirm) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()

    const personExists = persons.find(person => person.name === newName)

    if (personExists) {
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      
      if (confirm) {
        const personObject = {
          name: newName,
          number: newNumber
        }

        personService
          .update(personExists.id, personObject)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== personExists.id ? person : updatedPerson))
            setNewName('')
            setNewNumber('')
          })
      }
    } 

    else {
      const personObject = {
        name: newName,
        number: newNumber
      }

    personService
      .create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const filterPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new contact</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filterPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App
