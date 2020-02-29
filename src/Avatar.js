import React, { Component } from 'react';

export default class Avatar extends Component {
	setBackgroundImage(){
		let images = [];

		this.props.features.forEach((feature) => {
			if (feature.value){
				images.push(`url('img/${feature.dir}/${feature.value}.png')`);
			}
		});

		images.push("url('img/base.png')");

		return images.join(',');
	}
	render() {
		return (
			<div className="avatar" style={{backgroundImage: this.setBackgroundImage()}}>
			</div>
		);
	}
}