import React from 'react';
import { featureContent } from '../data/featureItems.js';
import '../styles/features.css';

export default class Features extends React.Component {
	render () {
		return (
			<section className="features">
        		<h2 className="sr-only">Features</h2>

        		{featureContent.map((content) => (
        			<div className="feature-item" key={content.id}>
        				{/*<img src={require(`${content.logo}`)} alt={content.alt} className="feature-icon" />*/}
        				<img src={`${content.logo}`} alt={content.alt} className="feature-icon" />
        				<h3 className="feature-item-title">{content.title}</h3>
        				<p>{content.content}</p>
        			</div>
        		))}

        	</section>
		)
	}
}