import React from 'react';
import {StyleSheet, View} from 'react-native';
import Main from './Main';
import {Provider} from 'react-redux';
import store from './store';

store.subscribe(() => {
  console.log(store.getState());
});
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.appcontainer}>
        <Main></Main>
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
