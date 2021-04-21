import React from 'react';

export default class Account extends React.Component {
	render() {
		return (
			<section class="account">
		        <div class="account-content-wrapper">
		          <h3 class="account-title">Argent Bank {this.props.accountType}</h3>
		          <p class="account-amount">{this.props.amount}</p>
		          <p class="account-amount-description">Available Balance</p>
		        </div>
		        <div class="account-content-wrapper cta">
		          <button class="transaction-button">View transactions</button>
		        </div>
		      </section>
		)
	}
}