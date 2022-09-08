import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map((part) => {
        return (
          <p>
            {part.name} {part.exercises}
          </p>
        );
      })}
      <b>
        total of {course.parts.reduce((p, c) => p + parseInt(c.exercises), 0)}{" "}
        exercises
      </b>
    </>
  );
};

export default Course;
