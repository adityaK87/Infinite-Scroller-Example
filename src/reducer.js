// Reducer function for managing state related to data fetching
const reducer = (state, action) => {
	switch (action.type) {
		// Case for starting data fetching, set loading to true
		case "START_FETCHING_DATA":
			return { ...state, loading: true };

		// Case for successful data retrieval, update the data and set loading to false
		case "GET_DATA":
			return { ...state, data: action.payload, loading: false };

		// Case for fetch failure, store the error message
		case "FETCH_FAILURE":
			return { ...state, errMessage: action.payload };

		// Default case, return the current state for unrecognized actions
		default:
			return state;
	}
};

export default reducer;
