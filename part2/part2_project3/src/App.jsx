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

const Country = ({ country }) => {
  return (
    <div>
      <div>
        <h1>{country.name.common}</h1>
        <p>{country.capital}</p>
        <p>{country.area}</p>
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

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, add a more specific filter</p>

  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    );

  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
    
  } else {
    return <p>No matches found.</p>;
  }
};


const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        console.log(initialCountries)
        setCountries(initialCountries)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const filterCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <FilterForm newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Countries countries={filterCountries} />
    </div>
  )

}

export default App
