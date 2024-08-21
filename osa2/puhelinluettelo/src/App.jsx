import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name} : {person.number}</li>
  )
}

const Header = ({ text }) => <h1>{text}</h1>
const SmallerHeader = ({ text }) => <h2>{text}</h2>
const Filter = ({ filter, handleFilterChange }) => (
  <div>
    filter shown with <input value={filter} onChange={handleFilterChange} />
  </div>
)

const AddPersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const trimmedName = newName.trim()
    if (trimmedName === "") {
      alert("Name cannot be empty")
      return
    }
    if (persons.some(person => person.name.trim() === trimmedName)) {
      alert(`${trimmedName} is already added to phonebook`)
      return
    }
    const nameObject = {
      name: trimmedName,
      number: newNumber,
    }

    setPersons(persons.concat(nameObject))
    setNewName("")
    setNewNumber("")
  }

  return (
    <form onSubmit={addName}>
      <div>
        name: <input
        value={newName}
        onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input
        value={newNumber}
        onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <Header text="Phonebook"/>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <SmallerHeader text="Add a new"/>
      <AddPersonForm persons={persons} setPersons={setPersons} />
      <SmallerHeader text="Numbers"/>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App