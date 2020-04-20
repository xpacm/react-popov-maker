import React, { Component } from 'react';
import './Thumbnail.css';

export default class Thumbnail extends Component {

	draw(imgSrc){
		let img = new Image(55, 55);
		img.onload = () => { this.ctx.drawImage(img, 0, 0, img.width, img.height) }
		img.src = 'img/' + imgSrc;
	}

	imgUrl(){
		// 	return this.props.img ? `url('img/${this.props.img_dir}/${this.props.img}.png')` : "url('img/1x1.png')";
		return this.props.img ? `${this.props.img_dir}/${this.props.img}.png` : "1x1.png";
	}

	onThumbnailClick(){
		if (typeof this.props.onClick === "function"){
			this.props.onClick(this.props.img);
		}
	}

	componentDidMount() {
		this.ctx = this.refs.tn.getContext('2d');
		let imgPath = this.imgUrl();
		this.draw(imgPath);
	}

	render() {
		return (
			<canvas ref="tn" className={"thumbnail" + this.props.active} width={55} height={55} onClick={() => this.onThumbnailClick()} />
		);
	}
}
