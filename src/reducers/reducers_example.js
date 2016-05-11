'use strict';

import { ACTION_TYPES } from '../actions/index'


export default function(state = [], action) {

	switch (action.type) { 

		case ACTION_TYPES.EXAMPLE_ACTION:

			return {
				example1: '',
				example2: false
			};

		
	}

	return state;
}