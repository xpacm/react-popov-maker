import React, { Component } from 'react';
import './Thumbnail.css';

export default class Thumbnail extends Component {
	imgUrl(){
		return this.props.img ? `url('img/${this.props.img_dir}/${this.props.img}.png')` : "url('img/1x1.png')";
	}

	onThumbnailClick(){
		if (typeof this.props.onClick === "function"){
			this.props.onClick(this.props.img);
		}
	}

	render() {
		return (
			<div 
				className={"thumbnail" + this.props.active}
				style={{backgroundImage: this.imgUrl()}} 
				onClick={() => this.onThumbnailClick()}>
			</div>
		);
	}
}
