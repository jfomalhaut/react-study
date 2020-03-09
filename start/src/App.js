import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigations';
import List from './router/List';
import Home from './router/Home';

const App = () => {
	const [count, setCount] = useState(0);
	const increasement = () => {
		setCount(count + 1);
	};

	// return(
	// 	<div>
	// 		<h1>hi</h1>
	// 		<h2>{count}</h2>
	// 		<button onClick={increasement}>increasement</button>
	// 	</div>
	// );

	return (
		<BrowserRouter>
			<Navigation />
			<Route path="/" exact={true} component={Home} />
			<Route path="/list" component={List} />
		</BrowserRouter>
	)
};

export default App;

// export default class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			count: 10
// 		};
// 		this.increasement = this.increasement.bind(this);
// 		this.decreasement = this.decreasement.bind(this);
// 	}

// 	componentDidMount() {
// 		console.log('componentDidMount');
// 	}

// 	componentDidUpdate(){
// 		console.log('componentDidUpdate');
// 	}

// 	increasement () {
// 		this.setState({ count: this.state.count + 1});
// 	}

// 	decreasement () {
// 		this.setState({ count: this.state.count - 1});
// 	}

// 	render() {
// 		return (
// 			<div className="container">
// 				<h1>hi! I'm App Component</h1>
// 				<h2>{this.state.count}</h2>
// 				<button onClick={this.increasement}>increase</button>
// 				<button onClick={this.decreasement}>decrease</button>
// 			</div>
// 		);
// 	}
// };