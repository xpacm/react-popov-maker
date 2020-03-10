import React, { Component } from 'react';
import Avatar from './Avatar';
import FeatureSelector from './FeatureSelector';
import CustomButton from './CustomButton';

const features = [
	{'dir': 'Body', 'name': 'Body', 'options': ['', 'Muscular', 'Popov', 'Princess', 'Swimmer'], 'locked': false},
	{'dir': 'Facial_Hair', 'name': 'Facial Hair', 'options': ['', 'Mustache', 'Popov', 'Santa'], 'locked': false},
	{'dir': 'Hair', 'name': 'Hair', 'options': ['', 'Adam', 'Fuckboy', 'Horacio', 'Jonathan', 'Popov'], 'locked': false},
	{'dir': 'Glasses', 'name': 'Glasses', 'options': ['', 'Horacio', 'Popov', 'Ski', 'Steampunk'], 'locked': false},
	{'dir': 'Hat', 'name': 'Hat', 'options': ['', 'Flowers', 'Private', 'Summer_Cowboy'], 'locked': false},
]

export default class Editor extends Component {

	constructor(props){
		super(props);

		this.state = {
			featureSelectors: features.map((feature) => (
				{'dir': feature.dir, 'value': feature.options[0], 'locked': feature.locked}
			))
		}
	}

	renderFeatureSelector(feature, index){
		return <FeatureSelector
				key={feature.dir}
				img_dir={feature.dir}
				name={feature.name} 
				value={this.state.featureSelectors[index].value} 
				locked={this.state.featureSelectors[index].locked} 
				options={feature.options}
				onChange={ (newValue) => this.handleFSChange(index, newValue) }
				onLockedChange={ () => this.toggleLocked(index) } />
	}

	handleFSChange(id, newValue) {
		const fs = this.state.featureSelectors.slice();

		fs[id].value = newValue;

		this.setState({
			featureSelectors: fs
		});
	}

	toggleLocked(id) {
		const fs = this.state.featureSelectors.slice();

		fs[id].locked = !fs[id].locked;

		this.setState({
			featureSelectors: fs
		});
	}

	handleRandomizeClick() {
		const fs = this.state.featureSelectors.slice();

		features.forEach((feature, index) => {
			if ( !fs[index].locked ) {
				fs[index].value = feature.options[Math.floor(Math.random() * feature.options.length)]
			}
		});

		this.setState({
			featureSelectors: fs
		});
	}

	render() {
		return (
			<div className="editor">
				<Avatar 
					img_dirs={this.state.featureSelectors.map((feature) => feature.dir)} 
					img_names={this.state.featureSelectors.map((feature) => feature.value)} 
				/>
				<div className="features">
					{features.map((feature, index) => this.renderFeatureSelector(feature, index))}
					<CustomButton value="Randomize" onClick={ () => this.handleRandomizeClick() } />
				</div>
			</div>
		);
	}
}