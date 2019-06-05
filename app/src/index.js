import React from 'react';
import {Provider} from 'react-redux';

import Screens from './screens';
import {configureStore} from './store';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <Screens/>
    </Provider>
);
