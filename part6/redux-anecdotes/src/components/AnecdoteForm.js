import { useSelector, useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addNewAnecdote = (event) => {
		event.preventDefault();
		const content = event.target.newAnecdote.value;
		event.target.newAnecdote.value = "";
		dispatch(addAnecdote(content));
	};

	return (
		<>
			<h2>create new</h2>
			<form onSubmit={addNewAnecdote}>
				<div>
					<input name="newAnecdote" />
				</div>
				<button type="submit">create</button>
			</form>
		</>
	);
};

export default AnecdoteForm;
