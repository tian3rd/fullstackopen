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
    </>
  );
};

export default Course;
