/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Index from './app/index';
import Login from './app/login';

class BBKAddressBook extends Component {

  render() {
      if(!this.props.isLoggedIn)
      {
        return <Login />;
      }
      return <Index />
    }

  }

AppRegistry.registerComponent('BBKAddressBook', () => BBKAddressBook);
