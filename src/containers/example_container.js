'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doExampleAction } from '../actions/index';

class ExampleContainer extends Component {
	

	componentWillMount () {

		//do something here if you'd like to...

	}


	render() {
			return (<div>This is an example container</div>);
	}

}


function mapStateToProps (state) {
	return { 
		example: state.example
	};
}


export default connect(mapStateToProps, { doExampleAction })(ExampleContainer);
