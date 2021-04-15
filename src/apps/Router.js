import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Homepage from '../pages/Homepage.js';
import SignIn from '../pages/SignIn.js';
import '../styles/root.css'

export default class PageRouter extends React.Component {
	render () {
		return (
			<Router>
		    	<div id="page-body">
				    <Header />
				    <Switch>
				    	<Route exact path='/' component={Homepage} />
				    	<Route path='/signin' component={SignIn} />
				    </Switch>
				    <Footer />
				</div>
		    </Router>
		)
	}
}