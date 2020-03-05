import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import List from './routes/List';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation/>
			<Route path="/" exact={true} component={Home}/>
			<Route path="/list" component={List}/>
			<Route path="/detail" component={Detail}/>
		</BrowserRouter>
	)
};

export default App;