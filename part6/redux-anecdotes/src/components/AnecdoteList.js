import { useSelector, useDispatch } from "react-redux";
import { updateVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
	// use configureStore to create the store, so the list is within state object
	const anecdotes = useSelector((state) => state.anecdotes);
	const filterStr = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	const vote = (id) => {
		console.log("vote", id);
		dispatch(updateVote(id));
		const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
		dispatch(
			setNotification(
				`Voted anecdote: ${votedAnecdote.content}, now with ${
					votedAnecdote.votes + 1
				} votes`
			)
		);
		setTimeout(() => {
			dispatch(setNotification(""));
		}, 5000);
	};

	return (
		<>
			{anecdotes
				.filter((anecdote) =>
					anecdote.content.includes(filterStr.filterContent)
				)
				.map((anecdote) => {
					return (
						<div key={anecdote.id}>
							<div>{anecdote.content}</div>
							<div>
								has {anecdote.votes}
								<button onClick={() => vote(anecdote.id)}>vote</button>
							</div>
						</div>
					);
				})}
		</>
	);
};

export default AnecdoteList;
