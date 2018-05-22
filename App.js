import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Font } from 'expo';
export default class App extends React.Component {
  state = {
      fontLoaded: false,
  }

  async componentDidMount() {
      await Font.loadAsync({
          'kanit-regular': require('./assets/fonts/Kanit-Regular.ttf'),
      });
      this.setState({ fontLoaded: true });
  }

  render() {
      if (this.state.fontLoaded) {
          return (
            <View style={styles.container}>
              <Text style={styles.font16}>สวัสดี ชาวโลก Kanit Regular</Text>
            </View>
          );
      }else{
          return(
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
            </View>

          )
      }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font16: {
    fontFamily: 'kanit-regular', 
    fontSize: 16
  },
});
