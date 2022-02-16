import { useSelector, useDispatch } from "react-redux";

const App = () => {
	const anecdotes = useSelector((state) => state);
	const dispatch = useDispatch();

	const vote = (id) => {
		console.log("vote", id);
		dispatch({ type: "VOTE", id });
	};

	const addNewAnecdote = (event) => {
		event.preventDefault();
		const content = event.target.newAnecdote.value;
		event.target.newAnecdote.value = "";
		dispatch({ type: "ADD_ANECDOTE", content });
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
			<h2>create new</h2>
			<form onSubmit={addNewAnecdote}>
				<div>
					<input name="newAnecdote" />
				</div>
				<button type="submit">create</button>
			</form>
		</div>
	);
};

export default App;
