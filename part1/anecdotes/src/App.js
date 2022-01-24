import React, { useState } from "react";

const NextAnecBtn = ({ handleClick }) => {
  return <button onClick={handleClick}>Next anecdote</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const votes = anecdotes.map((_) => 0);

  const generateRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const [selected, setSelected] = useState(generateRandomIndex(anecdotes));
  const [vote, setVote] = useState(votes);

  const generateNewAnecdote = (array) => () => {
    // in case it's the same anecdote
    let newSelected = generateRandomIndex(array);
    while (newSelected === selected) {
      newSelected = generateRandomIndex(array);
    }
    setSelected(newSelected);
  };

  const updateVote = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={updateVote}>vote</button>
      <NextAnecBtn handleClick={generateNewAnecdote(anecdotes)} />
      <br />
      <h1>Anecdote with most votes:</h1>
      {/* use ... for Math.max */}
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
    </div>
  );
};

export default App;
