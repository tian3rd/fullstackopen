import { useDispatch } from "react-redux";
import { addAnecdoteObj } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addNewAnecdote = async (event) => {
		event.preventDefault();
		const content = event.target.newAnecdote.value;
		event.target.newAnecdote.value = "";
		// this step writes the anecdote to the database
		const newAnecdoteEntry = await anecdoteService.addNewAnecdoteEntry(content);
		// difference is add an obj or add content (then use asObj to createa obj)
		dispatch(addAnecdoteObj(newAnecdoteEntry));
		// dispatch(addAnecdote(content));
		dispatch(setNotification(`Added anecdote: ${content}`));
		// dispatch(clearNotification(5));
		setTimeout(() => dispatch(setNotification("")), 5000);
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
