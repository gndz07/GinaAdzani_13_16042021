import React from 'react';
import Hero from '../components/Hero.js'
import Features from '../components/Features.js'

export default class Homepage extends React.Component {
	render () {
		return (
			<div>	
				<Hero />
				<Features />
			</div>
		)
	}
}