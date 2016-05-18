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
  View,
} from 'react-native';

import Index from './views/index';
import Login from './views/login';

class BBKAddressBook extends Component {


  render() {
        return <Login />;
    }

  }

AppRegistry.registerComponent('BBKAddressBook', () => BBKAddressBook);
