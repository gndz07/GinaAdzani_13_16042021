import React from 'react';
import { connect } from 'react-redux';
import { checkToken } from '../actions/checkToken.js';
import Account from '../components/Account.js';
import UserName from '../components/UserName.js';
import '../styles/user-dashboard.css';

class UserDashboard extends React.Component {

	componentDidMount() {
		const logInDetails = {
			email: this.props.user.user.email,
			password: this.props.user.pass
		};
		this.props.checkToken(this.props.user.authToken, logInDetails);
	}

	render () {
		return (
			<main className="main bg-dark">
				<UserName />
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

export default connect(mapStateToProps, { checkToken })(UserDashboard);


