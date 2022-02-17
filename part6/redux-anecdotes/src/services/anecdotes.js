import axios from "axios";

// https will cause a cors error
// because db.json has 'anecdotes' property
const baseURL = "http://localhost:3001/anecdotes";

const getAll = async () => {
	const response = await axios.get(baseURL);
	return response.data;
};

const addNewAnecdoteEntry = async (content) => {
	const newAnecdote = {
		content,
		id: (100000 * Math.random()).toFixed(0),
		votes: 0,
	};
	// post here only returns the new entry after writing to db.json
	const response = await axios.post(baseURL, newAnecdote);
	console.log("response.data: ", response.data);
	return response.data;
};

export default { getAll, addNewAnecdoteEntry };
