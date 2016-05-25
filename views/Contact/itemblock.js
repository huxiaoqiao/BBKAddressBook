'use strict'

import React,{
    Component,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Utils from '../utils';
import Contact_list from './contact_list';

export default class ItemBlock extends Component {


    _gotoListPage(title){
      
      this.props.nav.push({
        component: Contact_list,
        passProps: {
          title: title
        },
        type: 'Normal'
      })
    }

    render(){
        var size = {
            width:parseInt(this.props.width),
            height:parseInt(this.props.width),
            backgroundColor:this.props.color,
        };

        return (
            <TouchableOpacity onPress={()=>this._gotoListPage(this.props.title)}>
                <View style={[styles.itemBlock,size]}>
                    <Text style={styles.font16}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    itemBlock:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 10,
    },
    font16:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
});
