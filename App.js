import React from 'react';
import Horizontal from './components/Horizontal';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class App extends React.Component {
      render(){
        return (
          <View>
            <Horizontal />
          </View>
        );
      }
    }
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  }
});