import Expo from 'expo';
import { Provider } from 'react-redux';
import Router from './src/components/Router';
import store from './src/store';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router />
    );
  }
}


Expo.registerRootComponent(App);

// export default class App extends React.Component {
//   render() {
//     console.log("=======!!!");
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app123-----!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
