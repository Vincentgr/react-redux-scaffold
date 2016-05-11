'use strict';

export const ACTION_TYPES = {
	EXAMPLE_ACTION: 'EXAMPLE_ACTION'
};


export function doExampleAction () {

	//do stuff here
	var payload = {};

	return {
		type: ACTION_TYPES.EXAMPLE_ACTION,
		payload: payload
	};
}

