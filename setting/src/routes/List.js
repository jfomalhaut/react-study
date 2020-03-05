import React from 'react';
import { Link, Route } from 'react-router-dom';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import './List.css';

const List = () => {
	return (
		<div className="container">
			<h1>List page!</h1>
			<div className="content">
				<div className="left">
					<Link to="/list/menu1">Menu1</Link>
					<Link to="/list/menu2">Menu2</Link>
				</div>
				<div className="right">
					<Route path="/list/menu1" exact={true} component={Menu1} />
					<Route path="/list/menu2" component={Menu2} />
				</div>
			</div>
		</div>
	);
};

export default List;