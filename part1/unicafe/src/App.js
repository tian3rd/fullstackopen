import React, { useState } from "react";

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ number, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{number}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral > 0) {
    return (
      <>
        <StatisticsLine number={good} text="good" />
        <StatisticsLine number={neutral} text="neutral" />
        <StatisticsLine number={bad} text="bad" />
        <StatisticsLine number={good + neutral + bad} text="all" />
        <StatisticsLine
          number={(good - bad) / (good + bad + neutral)}
          text="average"
        />
        <StatisticsLine
          number={good / (good + neutral + bad)}
          text="positive"
        />
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default App;
