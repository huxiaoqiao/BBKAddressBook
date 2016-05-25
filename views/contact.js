'use strict'

import React,{
    Component,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

import Utils from './utils';
import ItemBlock from './contact/itemblock';

var WIDTH = Math.floor(((Utils.size.width -20) - 50) / 4);
var ITEMS = [
    {
      title:'电话手表事业部',
      color:'#FFD600',
    },
    {
      title:'教育电子事业部',
      color:'#126AFF',
    }

  ];

export default class Contact extends Component {

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemRow}>
            <ItemBlock
              title={ITEMS[0].title}
              width={WIDTH}
              color={ITEMS[0].color}
              nav={this.props.navigator}
            />
            <ItemBlock
              title={ITEMS[1].title}
              width={WIDTH}
              color={ITEMS[1].color}
              nav={this.props.navigator}
            />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:64,
    flex: 1,
    padding: 10,
  },
  itemRow:{
    flexDirection: 'row',
    marginBottom: 20,
  },

});
