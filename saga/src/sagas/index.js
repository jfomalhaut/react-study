import { spawn } from 'redux-saga/effects';
import watchSearch from './searchSaga';

export default function* rootSaga() {
	yield spawn(watchSearch);
};