import React, { Component } from 'react';

export default class CustomButton extends Component {
	render() {
		return (
			<button 
				className="" 
				onClick={this.props.onClick}
			>
				{this.props.value}
			</button>
		);
	}
}