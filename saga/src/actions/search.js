const SEARCH = "SEARCH";
const SEARCH_SUCCESS = "SEARCH_SUCCESS";
const SEARCH_FAIL = "SEARCH_FAIL";
const TEST = "TEST";

const search = (payload) => ({ type: SEARCH, payload });
const searchSuccess = (data) => ({ type: SEARCH_SUCCESS, data });
const searchFail = (error) => ({ type: SEARCH_FAIL, error });
const test = () => ({ type: TEST });

export default {
	SEARCH,
	SEARCH_SUCCESS,
	SEARCH_FAIL,
	TEST,

	test,
	search,
	searchSuccess,
	searchFail
};