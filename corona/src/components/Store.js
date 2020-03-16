import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { IoMdStar } from "react-icons/io";
import './Store.css';

const Store = ({ onPressHandler, activeCode, item: { code, name, addr, type, stock_at, remain_stat, lat, lng, created_at } }) => {
	const [pkg, setPkg] = useState([]);

	const getStock = label => {
		switch (label) {
			case 'plenty': return '100개 이상';
			case 'some': return '30개 ~ 100개';
			case 'few': return '2개 ~ 30개';
			case 'empty': return '재고없음';
		}
	};

	const getType = type => {
		switch (type) {
			case '01': return '약국';
			case '02': return '우체국';
			case '03': return '농협';
		}
	};

	const getPackage = (value) => {
		switch (value) {
			case 'plenty': setPkg([true, true, true, true, true]); break;
			case 'some': setPkg([true, true, true, false, false]); break;
			case 'few': setPkg([true, true, false, false, false]); break;
			case 'empty': setPkg([false, false, false, false, false]); break;
		}
	};

	const activePackage = (flag) => {
		if (flag) return 'active';
		else { return '' }
	}

	useEffect(() => {
		getPackage(remain_stat);
	}, []);

	return (
		<div className={`store ${activeCode === code ? 'active' : ''}`} id={`store${code}`} onClick={() => onPressHandler(code)}>
			<div className="stocks">
				<div className={`${remain_stat} stockDesc`}>{getStock(remain_stat)}</div>
				<ul className="stock">
					{pkg.map(item => (
						<li className={`pkg ${activePackage(item)}`}><IoMdStar/></li>
					))}
				</ul>
			</div>
			<div className="storeName">
				<div className="name">{name}</div>
				<div className="type">{getType(type)}</div>
			</div>
			<div className="address">{addr}</div>
			{/* <div>최종입고 {moment(stock_at).format('MM월DD일 HH시mm분')}</div> */}
		</div>
	);
};

export default Store;