import React, { useState } from 'react';

const Home = ({ history }) => {
	const [data, setData] = useState('');
	const onChangeData = event => {
		const { target: { value } } = event;
		setData(value);
	};
	const navigate = (value) => {
		if (value === 0) {
			history.push(`list/${data}`)
		} else {
			history.push(`about/${data}`)
		}
	};

	return (
		<div>
			<h1>HomeComponent</h1>
			<input value={data} onChange={onChangeData}/>
			<div>
				<button onClick={() => navigate(0)}>
					<h1>List로</h1>
				</button>
				<button onClick={() => navigate(1)}>
					<h1>About으로</h1>
				</button>
			</div>
		</div>
	);
};

export default Home;