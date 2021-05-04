import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/login.css';
import { logInUser } from '../actions/login.js';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = async e => {
		e.preventDefault();

		const logInDetails = {
			email: this.state.username,
			password: this.state.password
		};
		await this.props.logInUser(logInDetails);
		if (this.props.user.message === "Log in failed!") {
			//window.location.reload(true);
			window.alert("Please fill in with correct username and password.");
		}
	}

	render () { 
		return (
			<main className="main bg-dark">
		      	<section className="sign-in-content">
			        <i className="fa fa-user-circle sign-in-icon"></i>
			        <h1>Sign In</h1>
			        <form onSubmit={this.onSubmit}>
			          <div className="input-wrapper">
			            <label htmlFor="username">Username</label>
			            <input type="text" id="username" name="username" autoComplete="username"
			            	onChange={this.onChange} value={this.state.username} />
			          </div>
			          <div className="input-wrapper">
			            <label htmlFor="password">Password</label>
			            <input type="password" id="password" name="password" autoComplete="current-password"
			            	onChange={this.onChange} value={this.state.password} />
			          </div>
			          <div className="input-remember">
			            <input type="checkbox" id="remember-me" defaultChecked />
			            <label htmlFor="remember-me">
			            	Remember me
			        	</label>
			          </div>
			          <button className="sign-in-button">Sign In</button>
			        </form>
			    </section>
			</main>
		)
	}
}

Login.propTypes = {
	logInUser: PropTypes.func,
	user: PropTypes.object
}

const mapStateToProps = state => ({
	user: state.login
});

export default connect(mapStateToProps, { logInUser })(Login);