'use strict'

import React,{
  Component,
  WebView,
  StyleSheet,
  View,
} from 'react-native';

import Utils from './utils';

export default class WebPage extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <WebView
          contentInset={{top:64}}
          startInLoadingState={true}
          style={{flex:1}}
          url={this.props.url}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
});
