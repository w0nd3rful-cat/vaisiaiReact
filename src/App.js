import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import List from './components/List';
import User from './components/User';
import Add from './components/Add';
import './App.css';

import VaisiaiState from './context/vaisiai/VaisiaiState';

const App = () => {
	return (
		<VaisiaiState>
			<Router>
				<div className='App'>
					<Navbar />
					<Routes>
						<Route path='/' element={<List />} />
						<Route path='Add' element={<Add />} />
						<Route path=':userId' element={<User />} />
					</Routes>
				</div>
			</Router>
		</VaisiaiState>
	);
};

export default App;
