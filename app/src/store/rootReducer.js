import {combineReducers} from 'redux';

import projects from '../modules/projects/reducers';

const rootReducer = combineReducers({
    projects
});

export default rootReducer;
