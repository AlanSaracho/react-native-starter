import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './app/src';
import {configutron} from './reactotron.config';

configutron();

AppRegistry.registerComponent(appName, () => App);
