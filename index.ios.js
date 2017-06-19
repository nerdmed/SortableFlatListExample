/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import SortableListExample from './app/SortableListExample';

export default class ExampleProjectSortableList extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <SortableListExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    paddingTop: 20, 
  }
});

AppRegistry.registerComponent('ExampleProjectSortableList', () => ExampleProjectSortableList);
