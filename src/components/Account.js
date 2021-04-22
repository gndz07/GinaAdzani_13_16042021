import React from 'react';
import PropTypes from 'prop-types';
import '../styles/account.css';

export default class Account extends React.Component {
	render() {
		return (
			<section className="account">
		        <div className="account-content-wrapper">
		          <h3 className="account-title">Argent Bank {this.props.accountType}</h3>
		          <p className="account-amount">{this.props.amount}</p>
		          <p className="account-amount-description">Available Balance</p>
		        </div>
		        <div className="account-content-wrapper cta">
		          <button className="transaction-button">View transactions</button>
		        </div>
		      </section>
		)
	}
}

Account.propTypes = {
	accountType: PropTypes.string,
	amount: PropTypes.string
}