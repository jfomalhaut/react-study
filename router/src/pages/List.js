import React from 'react';
import Item from '../components/Item';
import './List.css';

const List = ({ history }) => {
	const items = [
		{ number: 1, name: 'box1', src: 'meat1' },
		{ number: 2, name: 'box2', src: 'meat2' },
		{ number: 3, name: 'box3', src: 'meat3' },
		{ number: 4, name: 'box4', src: 'meat4' },
		{ number: 5, name: 'box5', src: 'meat5' },
		{ number: 6, name: 'box6', src: 'meat6' },
		{ number: 7, name: 'box7', src: 'meat7' },
		{ number: 8, name: 'box8', src: 'meat8' }
	];
	const goDetail = id => {
		history.push(`/detail/${id}`);
	};

	return (
		<div className="container">
			{items.map((item, index) => (
				<Item key={`item${index}`} number={item.number} name={item.name} src={item.src} onClick={goDetail} />
			))}
		</div>
	);
};

export default List;
