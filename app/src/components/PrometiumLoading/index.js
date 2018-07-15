import React from 'react';
import * as Animatable from 'react-native-animatable';

import logo from './logo.png';

const PrometiumLoading = () => (
    <Animatable.Image
        source={logo}
        iterationCount="infinite"
        easing="linear"
        duration={8000}
        animation={{
            from: {rotate: '0deg'},
            to: {rotate: '360deg'}
        }}
    />
);

export default PrometiumLoading;
