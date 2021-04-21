import React from 'react';
import { connect } from 'react-redux';

class UserDashboard extends React.Component {
	
	render () {
		return (
			<div>
				Welcome back {this.props.user.user.firstName} {this.props.user.user.lastName}!
			</div>
		)
	}
};

const mapStateToProps = state => ({
	user: state.login
});

export default connect(mapStateToProps)(UserDashboard);