import React from 'react'
import imageURI from '../images/iamgeURI';

const items = [
	{ number: 1, name: 'item1', src: 'meat1' },
	{ number: 2, name: 'item2', src: 'meat2' },
	{ number: 3, name: 'item3', src: 'meat3' },
	{ number: 4, name: 'item4', src: 'meat4' },
	{ number: 5, name: 'item5', src: 'meat5' },
	{ number: 6, name: 'item6', src: 'meat6' },
	{ number: 7, name: 'item7', src: 'meat7' },
	{ number: 8, name: 'item8', src: 'meat8' }
];

const Detail = ({match}) => {
	const itemInfo = items.filter(item => {
		return item.number === match.params.id *1;
	})[0];
	return (
		<div>
			<h1>Item number is : {itemInfo.number}</h1>
			<div>{itemInfo.name}</div>
			<img src={imageURI[itemInfo.src]}/>
		</div>

	)
};

export default Detail;