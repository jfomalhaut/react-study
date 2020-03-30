import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Cart from './routers/Cart';
import List from './routers/List';
import { useSelector } from 'react-redux';

const App = () => {
	const cart = useSelector(({ cartReducer }) => { 
		return cartReducer.cart;
	});

	return (
		<BrowserRouter>
			<header>
				<h1>장바구니 : {cart.length}</h1>
			</header>
			<ul>
				<li>
					<Link to="/list">List</Link>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/list" exact component={List} /> 
				<Route path="/cart" component={Cart} /> 
				<Redirect path="*" to="/list" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;