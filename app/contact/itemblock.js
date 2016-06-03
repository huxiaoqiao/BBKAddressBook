'use strict'

import React,{
    Component,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

import Utils from '../utils';
import Contact_list from './contact_list';
import Service from '../service';

export default class ItemBlock extends Component {


    _gotoListPage(title){

        var nav = this.props.nav;
        var key = Utils.key;
        var partment = this.props.title;
        var path = Service.host + Service.getUser;


        Utils.post(path,{
            key: key,
            partment: partment
        },function(data){
            if (data.status){
                nav.push({
                    component:Contact_list,
                    passProps:{
                        title:title,
                        data:data
                    },
                    type:'Normal'
                }).bind(this);
            }

        });

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
