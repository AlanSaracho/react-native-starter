import React from 'react';
import {Provider} from 'react-redux';

import HelloPrometium from './screens/HelloPrometium';
import {configureStore} from './store';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <HelloPrometium/>
    </Provider>);
