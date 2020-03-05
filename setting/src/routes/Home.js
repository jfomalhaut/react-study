import React, { useState } from 'react';

const Home = () => {
	const [data, setData] = useState('안녕하세요~~');
	const goListPage = () => {
		setData('반가워요');
	};

	return (
		<div>
			<h1>Home page!!</h1>
			<h1>{data}</h1>
			<button onClick={goListPage}>List Page</button>
		</div>
	);
};

export default Home;