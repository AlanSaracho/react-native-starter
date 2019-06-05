import Reactotron from 'reactotron-react-native'
import {NativeModules} from 'react-native';
import Url from 'url-parse';

const configutron = () => {
    if (!__DEV__) return;
    const {hostname} = new Url(NativeModules.SourceCode.scriptURL);
    Reactotron
        .configure({host: hostname})
        .useReactNative() 
        .connect();
}

export {
    configutron
};
