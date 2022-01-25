import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const addNameAndNumber = (name, number) => (event) => {
    event.preventDefault();
    // let server generate id for us to avoid trouble in delete operations
    // const newId = persons.length + 1;
    if (
      persons
        .map((person) => person.name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      // use a template literal to create a new error message
      alert(`${name} is already added to numberbook`);
    } else {
      // const newPerson = { name, number, id: newId };
      const newPerson = { name, number };
      // post to backend server
      personService.create(newPerson).then((response) => {
        console.log(response);
        setPersons(persons.concat(response));
      });
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
