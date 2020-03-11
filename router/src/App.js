import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import Navigation from './components/Navigation';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation/>
			<Switch>
				<Route path="/" exact={true} component={Home}/>
				<Route path="/list" component={List}/>
				<Route path="/detail/:id" component={Detail}/>
				{/* <Route render={() => (
					<h1>404 Not Found</h1>
				)}/> */}
				<Redirect path="*" to="/"/>
			</Switch>
		</BrowserRouter>
	)
};

export default App;