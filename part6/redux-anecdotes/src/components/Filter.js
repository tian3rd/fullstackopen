import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
	const dispatch = useDispatch();

	const handleChange = (event) => {
		// input-field value is in variable event.target.value
		let filterString = event.target.value;
		dispatch(setFilter(filterString));
	};

	const style = {
		marginBottom: 10,
	};

	return (
		<div style={style}>
			filter <input onChange={handleChange} />
		</div>
	);
};

export default Filter;
