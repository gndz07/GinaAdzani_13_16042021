import React from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account.js';
import '../styles/user-dashboard.css';

class UserDashboard extends React.Component {
	
	render () {
		return (
			<main className="main bg-dark">
		      <div className="header">
		        <h1>Welcome back<br />
		        	{this.props.user.user.firstName} {this.props.user.user.lastName}!
		        </h1>
		        <button className="edit-button">Edit Name</button>
		      </div>
		      <h2 className="sr-only">Accounts</h2>
		      <Account accountType="Checking (x8349)" amount="$2,082.79" />
		      <Account accountType="Savings (x6712)" amount="$10,928.42" />
		      <Account accountType="Credit Card (x8349)" amount="$184.30" />
		    </main>
		)
	}
};

const mapStateToProps = state => ({
	user: state.login
});

export default connect(mapStateToProps)(UserDashboard);
