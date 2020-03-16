import React, { useEffect, useState } from 'react';
import { ITEMS, CATEGORY } from '../json';
import './List.css';

const nf = new Intl.NumberFormat();

const List2 = ({ match, history }) => {
	const [view, setView] = useState([]);
	const [onType, setOnType] = useState(0);
	const [isLoading, setLoading] = useState(true);
	const { params: { category } } = match;

	const transType = type => {
		switch (type) {
			case 1:
				return '수산물';
			case 2:
				return '청과';
			case 3:
				return '야채';
		}
	};

	const navigate = value => {
		history.push(`/${value}`);
	};

	const sortItems = value => {
		let type = 0;
		switch(value) {
			case 'all' : type = 0; break;
			case 'fish' : type = 1; break;
			case 'fruit' : type = 2; break;
			case 'vegetable' : type = 3; break;
		}
		setLoading(true);
		setOnType(type);
		const sort = type === 0 ? ITEMS : ITEMS.filter(item => type === item.type);
		setView(sort);
	};

	const offLoading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	useEffect(() => {
		const flag = CATEGORY.map(item => item.path).indexOf(category);
		if (flag === -1) {
			history.push(`/all`);
			return;
		}

		setLoading(true);
		sortItems(category);
	}, [category]);

	useEffect(() => {
		offLoading();
	}, [onType]);

	useEffect(() => {
		offLoading();
	}, []);

	return (
		<div className="container">
			<ul className="header">
				{CATEGORY.map(item => (
					<li className={`label ${onType === item.id ? 'active' : ''}`} onClick={() => navigate(item.path)}>
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

export default List2;