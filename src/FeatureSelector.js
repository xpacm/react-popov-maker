import React, { Component } from 'react';
import './FeatureSelector.css';

export default class FeatureSelector extends Component {

	onSelectChange(e){
		const newValue = e.target.value;

		if (typeof this.props.onChange === "function"){
			this.props.onChange(newValue);
		}
	}

	renderThumbnail(img){
		return img;
	}
	render() {
		return (
			<div className="fsel">
				<label>{this.props.name}</label>
				{/*<select 
					value={this.props.value} 
					onChange={(e) => this.onSelectChange(e)}>
					{this.props.options.map((v) => <option key={v} value={v}>{v}</option>)}
				</select>
				*/}
				{this.props.options.map((v) => this.renderThumbnail(v))}
				<input type="checkbox" checked={this.props.locked} onChange={this.props.onLockedChange} />
			</div>
		);
	}
}
