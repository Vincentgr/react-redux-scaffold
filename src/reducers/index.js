'use strict';

import { combineReducers } from 'redux';
import exampleReducer from './reducers_example';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  example: exampleReducer
});

export default rootReducer;
