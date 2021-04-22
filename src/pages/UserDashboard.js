import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Account from '../components/Account.js';
import UserName from '../components/UserName.js';
import '../styles/user-dashboard.css';

export default class UserDashboard extends React.Component {
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


