import { call, put, takeEvery } from 'redux-saga/effects';
import { Search } from '../actions';
import axios from 'axios';

function* fetchSearchSaga(action) {
	try {
		const json = {
			name: action.payload
		}
		const { data } = yield call([axios, 'get'], 'http://fomalhaut.shop/api/SP_getItem');
		yield put(Search.searchSuccess(data));
	} catch (error) {
		yield put(Search.searchFail(error.response));
	}
};

export default function* watchSearch() {
	yield takeEvery(Search.SEARCH, fetchSearchSaga);
};