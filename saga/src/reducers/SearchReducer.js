import { Search } from '../actions';

const inistialState = {
	data: {}
};

const reducer = (state = inistialState, action) => {
	switch (action.type) {
		case Search.SEARCH: {
			return { 
				... state,
				payload: action.payload
			};
		}
		case Search.SEARCH_SUCCESS: {
			return {
				...state,
				data: action.data
			};
		}
		case Search.SEARCH_FAIL: {
			return {
				...state,
				error: action.error
			};
		}
		case Search.TEST: {
			console.log(action.type);
			return state;
		}
		default: return state;
	}
};

export default reducer;