import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [
	"If it hurts, do it more often",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0,
	};
};

const initialState = anecdotesAtStart.map(asObject);

// const reducer = (state = initialState, action) => {
// 	console.log("state now: ", state);
// 	console.log("action", action);

// 	switch (action.type) {
// 		case "VOTE":
// 			const id = action.id;
// 			const updatedAnecdote = state.find((anecdote) => anecdote.id === id);
// 			updatedAnecdote.votes += 1;
// 			return state
// 				.map((anecdote) => (anecdote.id === id ? updatedAnecdote : anecdote))
// 				.sort((a, b) => b.votes - a.votes);
// 		case "ADD_ANECDOTE":
// 			return [...state, asObject(action.content)].sort(
// 				(a, b) => b.votes - a.votes
// 			);
// 	}

// 	return state;
// };

const anecdoteSlice = createSlice({
	name: "anecdotes",
	initialState,
	reducers: {
		updateVote(state, action) {
			console.log("state now: ", state);
			console.log("action", action);
			const id = action.payload;
			// because each anecdote is an object, so without spreading, the changes affects the original
			const updatedAnecdote = {
				...state.find((anecdote) => anecdote.id === id),
			};
			updatedAnecdote.votes += 1;
			const newState = state.map((anecdote) =>
				anecdote.id === id ? updatedAnecdote : anecdote
			);
			return newState.sort((a, b) => b.votes - a.votes);
			// // can mutate here with the following 2 lines
			// state.find((anecdote) => anecdote.id === id).votes += 1;
			// state.sort((a, b) => b.votes - a.votes);
		},
		addAnecdote(state, action) {
			return [...state, asObject(action.payload)].sort(
				(a, b) => b.votes - a.votes
			);
		},
	},
});

// // action creators
// export const updateVote = (id) => {
// 	return {
// 		type: "VOTE",
// 		id,
// 	};
// };

// export const addAnecdote = (content) => {
// 	return {
// 		type: "ADD_ANECDOTE",
// 		content,
// 	};
// };

export const { updateVote, addAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
