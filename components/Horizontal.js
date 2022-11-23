import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}>
        <View style={[styles.outer, styles.red]}>
          <Text style={styles.interText}>WellCome To My New Application</Text>
        </View>
        <View style={styles.outer}>
          <Text style={styles.interText}>Haider</Text>
        </View>
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.interText}>Khan</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},

  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  interText: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
  },
  red: {
    backgroundColor: '#dd4b39',
  },
  green: {
    backgroundColor: '#27ae60',
  },
});
