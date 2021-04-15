import React from 'react';
import '../styles/footer.css'

export default class Footer extends React.Component {
	render () {
		return (
			<footer className="footer">
		      <p className="footer-text">Copyright {(new Date().getFullYear())} Argent Bank</p>
		    </footer>
		)
	}
}