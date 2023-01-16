import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//components
import Login from './components/Login/Login';
import Register from './components/Register/Register';
//firebase
import PrivateRoute from './firebase/PrivateRoute';
import {AuthProvider} from './firebase/auth'


function App() {
	return (
		<AuthProvider>
		<Router>
			<div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			</div>
		</Router>
		</AuthProvider>
	)
}

export default App
