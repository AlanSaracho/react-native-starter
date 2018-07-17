import {createStackNavigator} from 'react-navigation';

import HelloPrometium from './HelloPrometium';

export default createStackNavigator({
    Home: {
        screen: HelloPrometium,
        navigationOptions: {
            title: 'Prometium Starter'
        }
    }
});
