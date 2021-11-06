/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// store.subscribe(() => {
//   console.log(store.getState());
// });

AppRegistry.registerComponent(appName, () => App);
