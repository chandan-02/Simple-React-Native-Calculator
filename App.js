import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/calculator'

class App extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8b739',
  },
});

export default App;
