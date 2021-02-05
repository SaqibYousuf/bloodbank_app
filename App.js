import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home/Home';
import Navigation from './navigation'
import firebase from 'firebase'
import { firebaseConfig } from './config'
import store from './Screens/store/store'
import { Provider } from 'react-redux';
import Footers from './Screens/footer/Footer';
// import  from '';

export default function App() {
  // useEffect(() => {
  //   orientation.unlockAllOrientations();
  // }, [])

  return (
    <Provider store={store}>
      <Navigation />
      {/* <Footers /> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
