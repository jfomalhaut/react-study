import React from 'react'
import { useLocation, NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
	return (
		<ul className="navi_ul">
			<li>
				<NavLink exact activeClassName="activeNavLink" to="/">Home</NavLink>
			</li>
			<li>
				<NavLink activeClassName="activeNavLink" to="/list">List</NavLink>
			</li>
			<li>
				<NavLink activeClassName="activeNavLink" to="/detail">Detail</NavLink>
			</li>
		</ul>
	)
};

export default Navigation;