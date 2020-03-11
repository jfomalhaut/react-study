import React from 'react';
import Sidebar from '../components/side';
import './List.css';
import { Detail } from '.';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const List = () => {
	return (
		<div className="container">
			<Sidebar/>
			<main>
				<BrowserRouter>
					<Switch>
						<Route path="/list/detail" component={Detail}/>
					</Switch>
				</BrowserRouter>
			</main>
		</div>
	);
};

export default List;