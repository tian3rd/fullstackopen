import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then((response) => {
        setPersons(response);
      })
      .catch((error) => {
        console.log("failed to initialize effect");
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
      // // use a template literal to create a new error message
      // alert(`${name} is already added to numberbook`);
      let confirmation = window.confirm(
        `${name} is already added to numberbook, replace the old number with the new one ${number}?`
      );
      if (confirmation) {
        const id = persons.find(
          (person) => person.name.toLowerCase() === name.toLowerCase()
        ).id;
        personService
          .update(id, { name, number })
          .then((response) => {
            // response is the new person data
            setPersons(
              persons.map((person) => (person.id !== id ? person : response))
            );
            // update the message and disappear after some time via updating Notification
            setMsg(`Updated ${name}'s number to ${number}`);
            setTimeout(() => {
              setMsg(null);
            }, 5000);
          })
          .catch((error) => {
            console.log("failed to update");
            setPersons(persons.filter((person) => person.id !== id));
            setMsg(`${name} has already been deleted from server`);
            setTimeout(() => {
              setMsg(null);
            }, 5000);
          });
      }
    } else {
      // const newPerson = { name, number, id: newId };
      const newPerson = { name, number };
      // post to backend server
      personService
        .create(newPerson)
        .then((response) => {
          console.log(response);
          setPersons(persons.concat(response));
          setMsg(`Added ${name} with number ${number}`);
          setTimeout(() => {
            setMsg(null);
          }, 5000);
        })
        .catch((error) => {
          console.log("failed to create");
          setPersons(persons.filter((person) => person.name !== name));
          setMsg(`${name} has already been deleted from server`);
          setTimeout(() => {
            setMsg(null);
          }, 5000);
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
      <Notification className="notification" message={msg} />
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
