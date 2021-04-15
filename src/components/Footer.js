import React from 'react';
import '../styles/footer.css'

export default class Footer extends React.Component {
	render () {
		return (
			<footer class="footer">
		      <p class="footer-text">Copyright {(new Date().getFullYear())} Argent Bank</p>
		    </footer>
		)
	}
}