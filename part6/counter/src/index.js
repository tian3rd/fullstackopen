import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const countReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		case "RESET":
			return 0;
		default:
			return state;
	}
};

const store = createStore(countReducer);

const App = () => {
	return (
		<>
			<div>{store.getState()}</div>
			<div>
				<button onClick={(e) => store.dispatch({ type: "INCREMENT" })}>
					Increment
				</button>
				<button onClick={(e) => store.dispatch({ type: "DECREMENT" })}>
					Decrement
				</button>
				<button onClick={(e) => store.dispatch({ type: "RESET" })}>
					Reset
				</button>
			</div>
		</>
	);
};

const renderApp = () =>
	ReactDOM.render(<App />, document.getElementById("root"));

renderApp();
store.subscribe(renderApp);
