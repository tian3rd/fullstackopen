import React from "react";

const Persons = ({ persons, nameFilter }) => {
  return (
    <>
      {nameFilter === ""
        ? ""
        : persons
            .filter((person) => person.name.includes(nameFilter))
            .map((person, index) => (
              <div key={person.name + index}>
                {person.name} {person.phone}
              </div>
            ))}
    </>
  );
};

export default Persons;
