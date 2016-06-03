'use strict'

import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Linking,
} from 'react-native';

import Utils from '../utils';
import ActionSheet from 'react-native-actionsheet';

const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 1;
const buttons = ['取消', '确认退出', '你好', '哈哈哈'];

export default class ContactCell extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    _handlePress(index){

        var tel = this.props.data.tel;
        var email = this.props.data.email;

        if(index == 1){
            //打电话
            Linking.openURL('tel://'+ tel );
        }else if(index == 2){
            //发短信
            Linking.openURL('sms://' + tel);
        }else if(index == 3){
            //发邮件
            Linking.openURL('mailto:' + email);
        }


    }

    _showActionSheet(){
        this.ActionSheet.show();
    }



    render(){
        var colors = ['#E20079', '#FFD602', '#25BFFE', '#F90000', '#04E246', '#04E246', '#00AFC9'];
        var color = {
            backgroundColor:colors[parseInt(Math.random() * 7)]
        };

        var tel = this.props.data.tel;
        var email = this.props.data.email;
        var realname = this.props.data.realname;

        var options = [];
        options.push('取消');
        options.push('打电话给' + realname);
        options.push('发短信给' + realname);
        if (email != ''){
            options.push('发邮件给' + realname);
        }

        return (
            <TouchableHighlight
                onPress={this.props.onSelect}
                underlayColor='#F5FCFF'
            >
                <View style={styles.container}>

                    <View style={[styles.textView,color]}>
                        <Text style={styles.bigText}>
                            {this.props.data.realname.substr(0,1) || '未'}
                        </Text>
                    </View>

                    <View style={styles.part}>
                        <Text>
                            {this.props.data.realname}
                        </Text>
                        <Text style={styles.unColor}>
                            {this.props.data.position}
                        </Text>
                    </View>

                    <View style={{flex:2}}>
                        <TouchableHighlight
                            underlayColor='#fff'
                            onPress={this._showActionSheet.bind(this)}
                        >
                            <Text style={styles.link}>
                                {tel}
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor='#fff'
                            onPress={this._showActionSheet.bind(this)}
                        >
                            <Text style={styles.link}>
                                {email || ''}
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <ActionSheet
                        ref={(o) => this.ActionSheet = o}
                        title={'联系'+realname}
                        options={options}
                        cancelButtonIndex={CANCEL_INDEX}
                        destructiveButtonIndex={DESTRUCTIVE_INDEX}
                        onPress={this._handlePress.bind(this)}
                    />

                </View>
            </TouchableHighlight>

        );
    }

}

const styles = StyleSheet.create({
    container:{
        width:Utils.size.width,
        height:80,
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#F6F6F6',
        borderBottomWidth:Utils.pixel,
    },
    textView:{
        width:50,
        height:50,
        borderRadius:4,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E30082',
    },
    bigText:{
        fontSize:25,
        color:'#fff',
        fontWeight:'bold'

    },
    part:{
        marginLeft:5,
        flex:1,
    },
    link:{
        color:'#1BB7FF',
        marginTop:2,
    },
    unColor:{
        color: '#575656',
        marginTop:8,
        fontSize:12,
    }
});