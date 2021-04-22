import React from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account.js';
import { editProfile } from '../actions/editProfile.js';
import '../styles/user-dashboard.css';

class UserDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editActive: false,
			firstName: this.props.user.user.firstName,
			lastName: this.props.user.user.lastName
		};

		this.handleClickEditName = this.handleClickEditName.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	handleClickEditName = e => {
		e.preventDefault();

		this.setState({
			editActive: !this.state.editActive
		});
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.editProfile(this.state.firstName, this.state.lastName);
		this.setState({
			editActive: !this.state.editActive
		});
	}

	render () {
		return (
			<main className="main bg-dark">
		      <div className="header">
		        <h1>Welcome back<br />
		        	<span className={ `${this.state.editActive ? "hidden" : ""}` }>
		        		{this.props.user.user.firstName} {this.props.user.user.lastName}!
		        	</span>
		        </h1>
		        <button className={`edit-button ${this.state.editActive ? "hidden" : ""}`} onClick={this.handleClickEditName}>
		        	Edit Name
		        </button>

		        <form className={ `${this.state.editActive ? "" : "hidden"}` }>
		        	<section className="edit-name-inputs">
			        	<input type="text" id="firstName" name="firstName" className="edit-name-inputs__item" 
			        		placeholder={this.props.user.user.firstName} onChange={this.onChange} value={this.state.firstName} />
			        	<input type="text" id="lastName" name="lastName" className="edit-name-inputs__item" 
			        		placeholder={this.props.user.user.lastName} onChange={this.onChange} value={this.state.lastName} />
			        </section>

			        <section className="edit-name-buttons">
				        <button type="submit" className="edit-name-buttons__item" onClick={this.onSubmit}>
				        	Save
				        </button>
				        <button className="edit-name-buttons__item" onClick={this.handleClickEditName}>
				        	Cancel
				        </button>
			        </section>
		        </form>
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

export default connect(mapStateToProps, { editProfile })(UserDashboard);
