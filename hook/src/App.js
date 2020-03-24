import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';
import About from './routers/About';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/home" component={Home} exact />
				<Route path="/list" component={List} />
				<Route path="/about/:data" component={About} />
				<Redirect path="*" to="/list" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;