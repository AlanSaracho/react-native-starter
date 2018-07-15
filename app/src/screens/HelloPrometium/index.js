import React, {Component} from 'react';
import {View} from 'react-native';

import {PrometiumLoading} from '../../components';
import MyCustomText from './components/MyCustomText';
import styles from './styles';

export default class HelloPrometium extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PrometiumLoading/>
                <MyCustomText/>
            </View>
        );
    }
}
