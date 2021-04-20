import React from 'react';
import { connect } from 'react-redux';
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

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const logInDetails = {
			email: this.state.username,
			password: this.state.password
		};
		//console.log(logInDetails);
		this.props.logInUser(logInDetails);
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
			            <input type="text" id="username" name="username"
			            	onChange={this.onChange} value={this.state.username} />
			          </div>
			          <div className="input-wrapper">
			            <label htmlFor="password">Password</label>
			            <input type="password" id="password" name="password"
			            	onChange={this.onChange} value={this.state.password} />
			          </div>
			          <div className="input-remember">
			            <input type="checkbox" id="remember-me" />
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

export default connect(null, { logInUser })(Login);