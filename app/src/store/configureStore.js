import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import Reactotron from '../../../reactotron.config';

const middleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(
        rootReducer,
        undefined,
        compose(
            applyMiddleware(middleware),
            Reactotron.createEnhancer()
        )
    );
    middleware.run(rootSaga);
    return store;
};

export default configureStore;
