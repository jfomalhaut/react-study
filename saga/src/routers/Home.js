import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../actions';

const Home = () => {
	const dispatch = useDispatch();
	const data = useSelector(({ searchReducer }) => searchReducer.data)
	const onReducer =  () => {
		dispatch(Search.search());
	};
	
	useEffect((() => {
		console.log(data);
	}), [data]);

	return (
		<div>
			<h1>HomeComponent</h1>
			<button onClick={onReducer}>redux</button>
		</div>
	);
};

export default Home;
