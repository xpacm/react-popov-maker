import React, { Component } from 'react';
import './Thumbnail.css';

export default class Thumbnail extends Component {
	imgUrl(){
		return this.props.img ? `img/${this.props.img_dir}/${this.props.img}.png` : 'img/1x1.png';
	}
	render() {
		return (
			<img src={this.imgUrl()} />
		);
	}
}
