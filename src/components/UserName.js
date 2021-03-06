import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editProfile } from '../actions/editProfile.js';

class UserName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editActive: false,
			firstName: this.props.user.user.firstName,
			lastName: this.props.user.user.lastName
		};

		this.handleClickEditName = this.handleClickEditName.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this)
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

	//function to capitalize name input
	capitalize = string => {
  		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	onSubmit = e => {
		e.preventDefault();
		const nameRegex =/^[^\s]+(\s+[^\s]+)*$/;
		//check if the name field is empty
		if (!nameRegex.test(this.state.firstName) || !nameRegex.test(this.state.lastName)) {
			window.alert("Please enter valid answer in the field(s)")
		} else {
			//group the names into an object
			const newName = {
				firstName: this.capitalize(this.state.firstName),
				lastName: this.capitalize(this.state.lastName)
			};
			//call the action to edit name
			this.props.editProfile(this.props.user.authToken, newName);
			this.setState({
				editActive: !this.state.editActive
			});
		}
	}

	render() {
		return (
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
		)
	}
}

UserName.propTypes = {
	editProfile: PropTypes.func,
	user: PropTypes.object
}

const mapStateToProps = state => ({
	user: state.login
});

export default connect(mapStateToProps, { editProfile })(UserName);