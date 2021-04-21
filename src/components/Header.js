import React from 'react';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import Logo from '../assets/argentBankLogo.png'
import '../styles/header.css'

class Header extends React.Component {
	render () {
		const guestHeader = 
			<div>
		        <NavLink to='/login' className="main-nav-item">
		          <i className="fa fa-user-circle"></i>
		          Sign In
		        </NavLink>
		    </div>

		const loggedInHeader =  
			<div>
		        <NavLink to='/user/profile' className="main-nav-item">
		          <i className="fa fa-user-circle"></i>
		          {this.props.user.user.firstName}
		        </NavLink>

		         <NavLink to='/user/profile' className="main-nav-item">
		          <i className="fa fa-sign-out"></i>
		          Sign Out
		        </NavLink>
		    </div>

		return (
			<nav className="main-nav">
		      <NavLink to='/' exact={true} className="main-nav-logo">
		        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
		        <h1 className="sr-only">Argent Bank</h1>
		      </NavLink>

		     {this.props.user.isLoggedIn ? loggedInHeader : guestHeader}
		    </nav>
		)
	}
}

const mapStateToProps = state => ({
	user: state.login
});

export default connect(mapStateToProps)(Header);