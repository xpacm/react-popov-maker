import React, { Component } from 'react';

export default class Avatar extends Component {
	draw(imgSrc){
		const ctx = this.refs.canvas.getContext('2d');

		let img = new Image();
		img.onload = () => { ctx.drawImage(img, 0, 0) }		
		img.src = 'img/' + imgSrc;
	}

	clearCanvas(){
		const ctx = this.refs.canvas.getContext('2d');

		ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
	}

	componentDidMount() {
		this.draw('base.png');
	}

	componentDidUpdate(prevProps) {
		if (JSON.stringify(prevProps.img_names) !== JSON.stringify(this.props.img_names)){
			this.clearCanvas();
			this.draw('base.png');
			
		    this.props.img_names.forEach((imgName, index) => {
				if (imgName){
					this.draw(`${this.props.img_dirs[index]}/${imgName}.png`);
				}
			});
		}
	}

	// setBackgroundImage(){
	// 	let images = [];

	// 	this.props.features.forEach((feature) => {
	// 		if (feature.value){
	// 			images.push(`url('img/${feature.dir}/${feature.value}.png')`);
	// 		}
	// 	});

	// 	images.push("url('img/base.png')");

	// 	return images.join(',');
	// }
	render() {
		return (
			<canvas ref="canvas" className="avatar" width={512} height={512} />
		);
	}
}