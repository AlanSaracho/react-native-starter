import {all} from 'redux-saga/effects';

import * as projects from '../modules/projects/saga';

function* rootSaga() {
    yield all([
        projects
    ]);
}

export default rootSaga;
