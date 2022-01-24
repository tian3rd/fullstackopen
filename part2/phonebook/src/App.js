import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "111", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const addNameAndNumber = (name, phone) => (event) => {
    event.preventDefault();
    const newId = persons.length + 1;
    if (persons.map((person) => person.name).includes(name)) {
      // use a template literal to create a new error message
      alert(`${name} is already added to phonebook`);
    } else {
      // it's a dictionary object, but can be abbreviated to just variable name (or use name: name, phone: phone)
      setPersons(persons.concat({ name, phone, id: newId }));
    }
    // don't forget to clear the name input
    setNewName("");
    setNewNumber("");
  };

  const showNewName = (event) => {
    setNewName(event.target.value);
  };

  const showNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const filterByName = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={nameFilter} handleOnChange={filterByName} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={showNewName}
        handleNumberChange={showNewNumber}
        handleSubmit={addNameAndNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
      <div>
        debug: name-{newName} number-{newNumber} filter-{nameFilter}
      </div>
    </div>
  );
};

export default App;
