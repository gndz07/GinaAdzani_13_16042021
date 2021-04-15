import React from 'react';
import Logo from '../assets/argentBankLogo.png'
import '../styles/header.css'

export default class Header extends React.Component {
	render () {
		return (
			<nav className="main-nav">
		      <a className="main-nav-logo" href="#">
		        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
		        <h1 className="sr-only">Argent Bank</h1>
		      </a>

		      <div>
		        <a className="main-nav-item" href="#">
		          <i className="fa fa-user-circle"></i>
		          Sign In
		        </a>
		      </div>
		    </nav>
		)
	}
}