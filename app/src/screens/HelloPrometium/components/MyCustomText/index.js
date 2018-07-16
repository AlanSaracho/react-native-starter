import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const MyCustomText = ({children}) => (
    <Text style={styles.instructions}>
        {children}
    </Text>
);

MyCustomText.propTypes = {
    children: PropTypes.string
};

MyCustomText.defaultProps = {
    children: ''
};

export default MyCustomText;
