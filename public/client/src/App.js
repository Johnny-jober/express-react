import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';

const App = () => {
	return (
		<Router>
			<div>
				<Route exact path="/test" component={Home} />
				<Route path="/test/about" component={About} />
			</div>
		</Router>
	);
};

export default App;
