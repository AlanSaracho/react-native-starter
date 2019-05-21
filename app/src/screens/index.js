import {createStackNavigator, createAppContainer} from 'react-navigation';

import HelloPrometium from './HelloPrometium';

const RootNavigator = createStackNavigator({
    Home: {
        screen: HelloPrometium,
        navigationOptions: {
            title: 'Prometium Starter'
        }
    }
});

const App = createAppContainer(RootNavigator);

export default App;
