import React, { Component } from 'react';
import './Thumbnail.css';

export default class Thumbnail extends Component {
	imgUrl(){
		return `img/${this.props.img_dir}/${this.props.img}.png`
	}
	render() {
		return (
			<img src={this.imgUrl()} />
		);
	}
}
