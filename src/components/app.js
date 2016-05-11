'use strict';

import React from 'react';
import { Component } from 'react';
import ExampleContainer from '../containers/example_container';


export default class App extends Component {
  
	constructor (props) {
		super(props);
	}

	componentWillMount () {
		
	}

	componentWillUnmount () {
		
	}

	render() {
		return (
			<div id="ReactReduxScaffold"> 
				<h1>React Redux Scaffold</h1>
				<ExampleContainer prop1={{}} prop2={{}} />
			</div>
		);
	}
}
