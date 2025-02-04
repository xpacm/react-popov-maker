import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import './FeatureSelector.css';

export default class FeatureSelector extends Component {

	handleThumbnailClick(img){
		if (typeof this.props.onChange === "function"){
			this.props.onChange(img);
		}
	}

	renderThumbnail(img){
		return <Thumbnail 
				key={img}
				active={img === this.props.value ? ' active' : ''}
				img={img} 
				img_dir={this.props.img_dir}
				onClick={(img) => this.handleThumbnailClick(img)} />;
	}
	render() {
		return (
			<div className="fsel-wrapper">
				<div className="fsel-top">
					<label>{this.props.name}</label>
					<img 
						src={"img/" + (this.props.locked ? "lock" : "unlock") + ".png"} 
						onClick={this.props.onLockedChange} 
						alt="some bull"
					/>
				</div>
				<div className="fsel">
					{this.props.options.map((v) => this.renderThumbnail(v))}
				</div>
			</div>
		);
	}
}
