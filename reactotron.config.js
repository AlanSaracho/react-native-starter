import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux'
import {NativeModules} from 'react-native';
import Url from 'url-parse';

const {hostname} = new Url(NativeModules.SourceCode.scriptURL);
const reactotron = Reactotron
    .configure({host: hostname})
    .useReactNative()
    .use(reactotronRedux())
    .connect();

export default reactotron;
