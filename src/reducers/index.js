'use strict';

import { combineReducers } from 'redux';
import exampleReducer from './reducers_example';

const rootReducer = combineReducers({
  example: exampleReducer
});

export default rootReducer;
