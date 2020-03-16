import React, { useEffect, useState } from 'react';
import { ITEMS, CATEGORY } from '../json';
import './List.css';

const nf = new Intl.NumberFormat();

const List = () => {
	const [view, setView] = useState([]);
	const [onType, setOnType] = useState(0);
	const [isLoading, setLoading] = useState(true);

	const transType = (type) => {
		switch(type) {
			case 1: return '수산물';
			case 2: return '청과';
			case 3: return '야채';
		}
	};

	const sortItems = type => {
		if (type === onType) {
			return;
		}
		setLoading(true);
		setOnType(type);
		// if (type === 0) {
		// 	setView(Items);
		// } else {
		const sort = type === 0 ? ITEMS : ITEMS.filter(item => type === item.type);
		setView(sort);
		// }
	};

	const offLoading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 200);
	};

	useEffect(() => {
		offLoading();
	}, [onType]);

	useEffect(() => {
		setView(Items);
		offLoading();
	}, []);

	return (
		<div className="container">
			<ul className="header">
				<li className={`label ${onType === 0 ? 'active' : ''}`} onClick={() => sortItems(0)}>
					전체보기
				</li>
				{CATEGORY.map(item => (
					<li className={`label ${onType === item.id ? 'active' : ''}`} onClick={() => sortItems(item.id)}>
						{item.label}
					</li>
				))}
			</ul>
			{isLoading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="items">
					{view.map(item => (
						<div className="item">
							<div className={`img color${item.type}`}></div>
							<div className="info">
								<div className="top">
									<span className={`type border${item.type}`}>{transType(item.type)}</span>
									<span className="name">{item.name}</span>
								</div>
								<div className="price">{nf.format(item.price)}원</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default List;