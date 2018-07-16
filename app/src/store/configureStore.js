import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import initialState from './initialState';
import rootReducer from './rootReducer';

const middleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware)
    );
    middleware.run(rootSaga);
    return store;
};

export default configureStore;
