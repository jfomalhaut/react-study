import React, { useState, useMemo, useRef } from 'react';

const getAverage = (numbers) => {
	console.log('작동중..');
	if (numbers.length === 0) {
		return 0;
	}
	const total = numbers.reduce((acc, cur) => acc + cur);
	return total/numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');
	const inputElement = useRef(null);

	const onChange = ev => {
		const { target: { value } } = ev;
		setNumber(value);
	};
	
	const onInsert = () => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber('');
		inputElement.current.focus();
	};

	const avg = useMemo(() => {
		return getAverage(list);
	}, [list]);

	return (
		<div>
			<input ref={inputElement} value={number} onChange={onChange} onKeyPress={(event) => event.key === 'Enter' ? onInsert() : null} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((num, idx) => <li key={idx}>{num}</li>)}
			</ul>
			<div>
				<b>평균 값:</b> {avg}
			</div>
		</div>
	);
};

export default Average;