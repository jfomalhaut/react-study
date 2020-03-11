import React from 'react';
import imageURI from '../images/iamgeURI';
import './Item.css';

const Item = ({ number, name, onClick, src }) => {
	const onClickHeandler = () => {
		onClick(number);
	};

	return (
		<div className="item" onClick={onClickHeandler}>
			<div className="img">
				<img src={`${imageURI[src]}`}/>
			</div>
			<div className="number">{number}</div>
			<div className="name">{name}</div>
		</div>
	);
};

export default Item;
