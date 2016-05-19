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


export default class Notice extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:{
        status:0
      }
    }
  }

  componentDidMount(){
    var path = Service.host + Service.getMessage;
    
    var that = this;

    Utils.post(path,{
      key:Utils.key
    },function(data) {

      if(data.status){
        
        that.setState = {
          data:data
       }   
        
      }else{
        Alert.alert('提示',data.data); 
      }
     
    });    
  }


  render(){

    var contents = [];
     var items = [];
    if(this.state.data.status){
      contents = this.state.data.data;
      
    }else
    {
      
    }

    for(var i = 0;i < contents.length; i++){
      items.push(
        <Item
           data={contents[i]}
           navigator={this.props.navigator}
           component={Detail}
           key={contents[i].messageid}
           text={contents[i].message}
           name={contents[i].username}
           date={contents[i].time}
         />
      );
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
    marginBottom: 64
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
