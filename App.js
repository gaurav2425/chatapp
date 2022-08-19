import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Main from './Main';
import {Provider} from 'react-redux';
import store from './store';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';

store.subscribe(() => {
  console.log(store.getState());
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <View style={styles.appcontainer}>
        <Main></Main>
        <FlashMessage position="bottom" />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  appcontainer: {
    backgroundColor: '#FAF5EF',
    flex: 1,
  },
  txt: {
    color: '#000000',
  },
});
