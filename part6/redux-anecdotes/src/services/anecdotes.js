import axios from "axios";

// https will cause a cors error
// because db.json has 'anecdotes' property
const baseURL = "http://localhost:3001/anecdotes";

const getAll = async () => {
	const response = await axios.get(baseURL);
	return response.data;
};

export default { getAll };
