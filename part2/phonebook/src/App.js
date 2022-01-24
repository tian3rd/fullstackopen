import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (name) => (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name }));
    setNewName("");
  };

  const showNewName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName(newName)}>
        <div>
          name: <input value={newName} onChange={showNewName} />
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
