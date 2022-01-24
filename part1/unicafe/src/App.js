import React, { useState } from "react";

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ number, text }) => {
  return (
    <div>
      {text} {number}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateValue = (newValue) => () => {
    if (newValue === "good") {
      setGood(good + 1);
    } else if (newValue === "neutral") {
      setNeutral(neutral + 1);
    } else if (newValue === "bad") {
      setBad(bad + 1);
    }
  };

  return (
    <>
      <Heading text="give feedback" />
      <div>
        <Button handleClick={updateValue("good")} text="good" />
        <Button handleClick={updateValue("neutral")} text="neutral" />
        <Button handleClick={updateValue("bad")} text="bad" />
      </div>
      <Heading text="statistics" />
      <Statistics number={good} text="good" />
      <Statistics number={neutral} text="neutral" />
      <Statistics number={bad} text="bad" />
      <Statistics number={good + neutral + bad} text="all" />
      <Statistics
        number={(good - bad) / (good + bad + neutral)}
        text="average"
      />
      <Statistics number={good / (good + neutral + bad)} text="positive" />
    </>
  );
};

export default App;
