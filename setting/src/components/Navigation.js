import { Link } from 'react-router-dom';
import React from 'react';
import './Navigation.css';

function Navigation() {
	return (
		<div className="header">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/list/menu1">List</Link></li>
				<li><Link to="/detail">Detail</Link></li>
			</ul>
		</div>
	);
}

export default Navigation;