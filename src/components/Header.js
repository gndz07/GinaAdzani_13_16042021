import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from '../assets/argentBankLogo.png'
import '../styles/header.css'

export default class Header extends React.Component {
	render () {
		return (
			<nav className="main-nav">
		      <NavLink to='/' exact={true} className="main-nav-logo">
		        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
		        <h1 className="sr-only">Argent Bank</h1>
		      </NavLink>

		      <div>
		        <NavLink to='/signin' className="main-nav-item">
		          <i className="fa fa-user-circle"></i>
		          Sign In
		        </NavLink>
		      </div>
		    </nav>
		)
	}
}