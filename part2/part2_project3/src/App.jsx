import { useState, useEffect } from 'react'
import countryService from './services/countries'
import './App.css'

const FilterForm = ({ newFilter, handleFilterChange }) => {
  return (
    <form>
      Find countries: <input
        value={newFilter}
        onChange={handleFilterChange}
      />
    </form>
  )
}

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>Show</button>
  )
}

const Country = ({ country }) => {
  return (
    <div>
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital.join(', ')}</p>
        <p>Area: {country.area}</p>
      </div>
      <div>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
      <div>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          width="200"
        />
      </div>
    </div>
  )
}

const Countries = ({ countries, selectedCountry, setSelectedCountry }) => {
  if (countries.length > 10) {
    return <p>Too many matches, add a more specific filter</p>
  }

  if (selectedCountry) {
    return (
      <div>
        <button onClick={() => setSelectedCountry(null)}>Back to list</button>
        <Country country={selectedCountry} />
      </div>
    )
  }

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{' '}
            <Button onClick={() => setSelectedCountry(country)} />
          </li>
        ))}
      </ul>
    )
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />
  } else {
    return <p>No matches found.</p>
  }
}

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setSelectedCountry(null)
  }

  const filterCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <FilterForm newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Countries
        countries={filterCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </div>
  )
}

export default App
