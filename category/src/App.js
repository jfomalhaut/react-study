import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import List2 from './routers/List2';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/:category" component={List2} />
				<Redirect path="*" to="/all" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;