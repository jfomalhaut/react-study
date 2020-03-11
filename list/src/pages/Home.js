import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Detail, List } from '.';

const Home = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/list" component={List}/>
				<Redirect path="*" to="/list/detail"/>
			</Switch>
		</BrowserRouter>
	)
}

export default Home;