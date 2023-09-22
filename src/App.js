import { useEffect, useReducer, useState } from "react";
import CardList from "./CardList";
import reducer from "./reducer";

const initialState = {
	data: [],
	limit: 10,
	errMessage: null,
	loading: false,
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [limit, setLimit] = useState(10);

	let fetchData = async () => {
		try {
			const res = await fetch(
				`https://dummyjson.com/products?limit=${limit}`
			);
			let data = await res.json();
			// Dispatch an action to store the fetched data in the state.
			dispatch({ type: "GET_DATA", payload: data });
		} catch (error) {
			// Dispatch an action to handle fetch failure and store the error message.
			dispatch({ type: "FETCH_FAILURE", payload: error.message });
		}
	};

	useEffect(() => {
		// Dispatch an action to indicate that data fetching is starting.
		dispatch({ type: "START_FETCHING_DATA" });
		fetchData();
		// eslint-disable-next-line
	}, []);

	console.log(state);
	return (
		<div>
			{state.loading === true ? (
				// Display a loading message while data is being fetched.
				<h1>loading...</h1>
			) : (
				// Render the CardList component with the fetched products when loading is complete.
				<CardList
					products={state.data}
					limit={limit}
					setLimit={setLimit}
					fetchData={fetchData}
				/>
			)}
		</div>
	);
}

export default App;
