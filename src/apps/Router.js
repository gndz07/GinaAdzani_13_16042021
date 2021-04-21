import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Homepage from '../pages/Homepage.js';
import Login from '../pages/Login.js';
import UserDashboard from '../pages/UserDashboard.js';
import '../styles/root.css'

class PageRouter extends React.Component {
	render () {
		return (
			<Router>
		    	<div id="page-body">
				    <Header />
				    <Switch>
				    	<Route exact path='/' component={Homepage} />
				    	<Route path='/login'>
				    		{this.props.user.isLoggedIn ? <Redirect to="/user/profile" /> : <Login />}
				    	</Route>
				    	<Route path='/user/profile'>
				    		{this.props.user.isLoggedIn ? <UserDashboard /> : <Redirect to="/login" />}
				    	</Route>
				    </Switch>
				    <Footer />
				</div>
		    </Router>
		)
	}
}

const mapStateToProps = state => ({
	user: state.login
});
export default connect(mapStateToProps)(PageRouter);