/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 引入外部样式
var Main = require('./Component/Main');

export default class RN_Demo extends Component {
  render() {
    return (
        <Main />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('RN_Demo', () => RN_Demo);
