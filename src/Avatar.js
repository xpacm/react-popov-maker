import React, { Component } from 'react';

export default class Avatar extends Component {
	draw(imgSrc){
		let img = new Image();
		img.onload = () => { this.ctx.drawImage(img, 0, 0) }		
		img.src = 'img/' + imgSrc;
	}

	clearCanvas(){
		this.ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
	}

	componentDidMount() {
		this.ctx = this.refs.canvas.getContext('2d');
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

	render() {
		return (
			<canvas ref="canvas" className="avatar" width={512} height={512} />
		);
	}
}