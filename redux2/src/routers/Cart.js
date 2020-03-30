import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Item';

const Cart = () => {
	const cart = useSelector(({ cartReducer }) => {
		return cartReducer.cart;
	});

	return (
		<div className="list">
			{cart.map(item => (
				<Item item={item} />
			))}
		</div>
	)
};

export default Cart;