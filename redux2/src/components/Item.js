import React from 'react';
import { GoCheck } from 'react-icons/go';

const nf = new Intl.NumberFormat();

const Item = ({ onCheck, onDelete, addCart, index, item, item: { name, src, price, check } }) => {
	return (
		<div className="item">
			<div className="img">
				<img src={src} />
			</div>
			<div className="info">
				<div className="name">{name}</div>
				<div className="price">{nf.format(price)}원</div>
				<button className="delete" onClick={() => onDelete(index)}>삭제</button>
				<button className="delete" onClick={() => addCart(item)}>담기</button>
			</div>
			<div className="checkbox">
				<span className={ check ? 'active' : ''} onClick={() => onCheck(index)}>
					<GoCheck />
				</span>
			</div>
		</div>
	);
};

export default Item;