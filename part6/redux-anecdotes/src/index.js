import React from "react";
import ReactDOM from "react-dom";
// import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";

// const store = createStore(reducer)
const store = configureStore({
	reducer: {
		anecdotes: reducer,
		notification: notificationReducer,
		filter: filterReducer,
	},
});

console.log("store state", store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	// <div></div>,
	document.getElementById("root")
);
