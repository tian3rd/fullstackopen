import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filterContent: "",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setFilter(state, action) {
			const filterContent = action.payload;
			return { ...state, filterContent };
		},
	},
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
