import React from 'react';
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Features from '../components/Features.js'
import Footer from '../components/Footer.js'

export default class Homepage extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<Hero />
				<Features />
				<Footer />
			</div>
		)
	}
}