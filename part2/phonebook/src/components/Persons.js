import React from "react";
import personService from "../services/persons";

const Persons = ({ persons, nameFilter }) => {
  const handleDelete = (personToDelete) => () => {
    const id = persons.find((person) => person.id === personToDelete.id).id;
    console.log(id);
    // ask user to confirm before delete operations
    let confirmation = window.confirm(`Delete ${personToDelete.name}?`);
    if (confirmation) {
      personService.erase(id);
    }
  };
  return (
    <>
      {nameFilter === ""
        ? ""
        : persons
            .filter((person) => person.name.includes(nameFilter))
            .map((person, index) => (
              <div key={person.name + index}>
                {person.name} {person.number}
                <button onClick={handleDelete(person)}>Delete</button>
              </div>
            ))}
    </>
  );
};

export default Persons;
