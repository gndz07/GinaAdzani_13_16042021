import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Homepage from '../pages/Homepage.js';
import Login from '../pages/Login.js';
import '../styles/root.css'

export default class PageRouter extends React.Component {
	render () {
		return (
			<Router>
		    	<div id="page-body">
				    <Header />
				    <Switch>
				    	<Route exact path='/' component={Homepage} />
				    	<Route path='/login' component={Login} />
				    </Switch>
				    <Footer />
				</div>
		    </Router>
		)
	}
}