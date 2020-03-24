import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/home" component={} exact />
				<Route path="/menu1" component={} />
			</Switch>
		</BrowserRouter>
	)
}