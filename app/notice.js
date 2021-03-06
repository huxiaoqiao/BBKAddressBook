'use strict'

import React,{Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';

import Utils from './utils';
import Item from './message/item';
import Detail from './message/detail';
import Service from './service';

var i = 0;

export default class Notice extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:{}
    }
  }
 
 componentDidMount(){
    var that = this;
    var path = Service.host + Service.getMessage;
    var that = this;
    //请求消息数据
    Utils.post(path, {
      key: Utils.key
    }, function(result){
      that.setState({
        data: result.data
      }); 
    });
  } 

  render(){
    var contents = [];
    var items = [];
    if(this.state.data.length > 0){
      contents = this.state.data;
      for (var i = 0; i < contents.length;i ++){
        items.push(
          <Item
            data={contents[i]}
            nav={this.props.navigator}
            component={Detail}
            key={contents[i].messageid}
            text={contents[i].message}
            name={contents[i].username}
            date={contents[i].time}/>
        );
      }
    }
    
    return (
      <ScrollView style={styles.container}>
        <View style={{height:50,padding:7,}}>
          <TextInput style={styles.search} placeholder="搜索"/>
        </View>
        <View style={{backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'#ddd'}}>
          {items}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F5F5',
    flexDirection:'column',
    marginTop:64,
  },
  search:{
    height:35,
    borderWidth:Utils.pixel,
    borderColor:'#ccc',
    paddingLeft:10,
    borderRadius:6,
    backgroundColor:'#fff',
  }

});
