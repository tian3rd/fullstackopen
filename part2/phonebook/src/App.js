import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNameAndNumber = (name, phone) => (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(name)) {
      // use a template literal to create a new error message
      alert(`${name} is already added to phonebook`);
    } else {
      // it's a dictionary object, but can be abbreviated to just variable name (or use name: name, phone: phone)
      setPersons(persons.concat({ name, phone }));
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameAndNumber(newName, newNumber)}>
        <div>
          name: <input value={newName} onChange={showNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={showNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <div key={person.name + index}>{person.name}</div>
      ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
