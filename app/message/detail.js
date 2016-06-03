'use strict'

import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';

export default class Detail extends Component{
    
    render(){
        
        
        return(
      <ScrollView style={styles.container}>

            <View style={styles.content}>
                    <View style={styles.content}>
                <Text style={{lineHeight:20,}}>{this.props.content.message}</Text>
                </View>

                <View style={[styles.inscribe, {marginTop:25}]}>
                <View style={{flex:1}}></View>
                <Text style={[styles.text, {color:'#007AFF'}]}>{this.props.content.username}</Text>
                </View>

                <View style={styles.inscribe}>
                <View style={{flex:1}}></View>
                <Text style={[styles.text, {color:'#3BC1FF'}]}>{this.props.content.time}</Text>
                </View> 
            </View>

      </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
        marginTop:64, 
    },
    
    content:{
        marginTop:20,
        marginLeft:15,
        marginRight:15,
        opacity:0.85,
  },
    inscribe:{
        flex:1,
        flexDirection:'row',
        marginRight:20,
  },
    text:{
        lineHeight:20,
        width:90
    }
});