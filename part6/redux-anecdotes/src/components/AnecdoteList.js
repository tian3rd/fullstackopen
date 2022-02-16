import { useSelector, useDispatch } from "react-redux";
import { updateVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
	// use configureStore to create the store, so the list is within state object
	const anecdotes = useSelector((state) => state.anecdotes);
	const dispatch = useDispatch();

	const vote = (id) => {
		console.log("vote", id);
		dispatch(updateVote(id));
	};

	return (
		<>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
		</>
	);
};

export default AnecdoteList;
