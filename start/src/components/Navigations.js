import React from "react";
import { Link } from "react-router-dom";

function Navigation({ navigation }) {
	const goHome = () => {
		console.log(navigation);
	}
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/list">List</Link>
			<h1 onClick={goHome}>link</h1>
		</div>
	)
}

export default Navigation;