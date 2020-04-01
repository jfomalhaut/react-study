import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/cartItem';
import Actions from '../actions';

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(({ cartReducer }) => {
		return cartReducer.cart;
	});

	const removeAllCart = () => {
		dispatch(Actions.cartAction.removeAllCart());
	};

	const checkAll = () => {
		dispatch(Actions.cartAction.checkAll());
	};

	const removeCheck = () => {
		dispatch(Actions.cartAction.removeCheck());
	};

	return (
		<div className="container">
			<div className="options">
				<button onClick={checkAll}>모두선택</button>
				<button onClick={removeAllCart}>모두삭제</button>
				<button onClick={removeCheck}>선택삭제</button>
			</div>
			<div className="list">
				{cart.map(item => (
					<CartItem key={`CARTITEM${item.id}`} item={item} />
				))}
			</div>
		</div>
	)
};

export default Cart;