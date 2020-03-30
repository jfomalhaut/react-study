import React from 'react';
import { GoCheck } from 'react-icons/go';

const nf = new Intl.NumberFormat();

const CartItem = ({ item: { name, src, price, check } }) => {
	
	return (
		<div className="item">
			<div className="img">
				<img src={src} />
			</div>
			<div className="info">
				<div className="name">{name}</div>
				<div className="price">{nf.format(price)}원</div>
				<button className="delete">삭제</button>
				<button className="delete">담기</button>
			</div>
			<div className="checkbox">
				<span className={ check ? 'active' : ''}>
					<GoCheck />
				</span>
			</div>
		</div>
	);
};

export default CartItem;