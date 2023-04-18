import React from 'react';
import AtomicReactLogo from '../public/atomic-react.png';
import './App.css';

const App = () => {

	return (
		<div className="container">
			<img src={AtomicReactLogo} className="logo" alt="Atomic React" />
			<h1 className="title">Atomic React</h1>
			<h2 className="subtitle">Webpack boilerplate</h2>
			<a href="https://www.atomic-react.com" rel="noreferrer" className="link" target="_blank">Go to Atomic React</a>
		</div>
	);
};

export default App;