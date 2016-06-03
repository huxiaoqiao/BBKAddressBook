
'use strict'

import React,{
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Modal,
    AsyncStorage,
    Alert,
} from 'react-native';

import Utils from './utils';
import Index from './index';
import Service from './service'
import DeviceInfo from 'react-native-device-info';

export default class Login extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            modalVisible: true,
            isLoggedIn: false,
        };
      }

    componentWillMount() {
        //var that = this;
        //AsyncStorage.getItem('token',function(err,token){
        //    if (!err && token){
        //        var path = Service.host + Service.loginByToken;
        //        Utils.post(path,{token:token},function(data){
        //            if (data.status) {
        //                that.setState({
        //                    isLoggedIn:true,
        //                    modalVisible:false,
        //                });
        //            }
        //        });
        //    }else {
        //        that.setState({isLoggedIn:false});
        //    }
        //});
    }


    componentDidMount(){




    }

   _getUsername(val){
     var username = val;
     this.setState({
       username:username
     });
   }

   _getPassword(val){
     var password = val;
     this.setState({
       password:password
     });
   }


   _setModalVisible(visible){
     this.setState({modalVisible:visible});
   }

   _doLogin(){
     var username = this.state.username;
     var password = this.state.password;
     
     var path = Service.host + Service.login;
     var that = this;
       var deviceId = DeviceInfo.getUniqueID();
     //执行登录请求
     if (deviceId) {
       Utils.post(path,{
         username:username,
         password:password,
         deviceId:deviceId,
       },function(data){
         if (data.status) {
           var user = data.data;
           //加入数据到本地
           AsyncStorage.multiSet([
             ['username',user.username],
             ['token',user.token],
             ['userid',user.userid],
             ['email',user.email],
             ['tel',user.tel],
             ['partment',user.partment],
             ['position',user.position],
           ],function(err){
             if(!err){
               that.setState({
                 isLoggedIn:true,
                 modalVisible:false,
               });
             }
           });
           that.setState({isLoggedIn:true});
         }else {
           Alert.alert('提示',data.data,[{text:'确定'}]);
           that.setState({isLoggedIn:false});
         }
       });
     }


      //this.setState({isLoggedIn:true,modalVisible:false});
   }

    render(){
        if(this.state.isLoggedIn)
        {
            return <Index />
        }else {
            return(
                <Modal
                    animated={true}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={()=>{this._setModalVisible(false)}}
                >
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.container}>
                            <Image source={require('./pic/logo.png')} style={styles.logo}></Image>
                            <TextInput
                                style={styles.input}
                                placeholder='工号'
                                onChangeText={(text)=>this._getUsername(text)}
                            ></TextInput>
                            <TextInput
                                style={styles.input}
                                placeholder='密码'
                                onChangeText={(text)=>this._getPassword(text)}
                            >
                            </TextInput>
                            <TouchableOpacity
                                onPress={()=>this._doLogin()}
                            >
                                <View style={styles.loginBtn}>
                                    <Text style={styles.loginText}>登录</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Modal>
            );

        }


    }
}

const styles = StyleSheet.create({
     scrollView:{
         marginTop:0,
     },
     container:{
         alignItems: 'center',
     },
     logo:{
       marginTop:80,
       width: 100,
       height: 100,
       resizeMode: Image.resizeMode.contain,
       marginBottom:10,
     },
     input:{
       marginTop: 10,
       marginLeft: 16,
       width: Utils.size.width - 32,
       borderWidth: Utils.pixel,
       height: 45,
       paddingLeft: 8,
       borderRadius: 5,
       borderColor: '#ccc',
     },
     loginBtn:{
         marginTop: 10,
         width: Utils.size.width - 32,
         height: 45,
         backgroundColor: '#024FA1',
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 4,
     },
     loginText:{
         color: 'white',
         fontSize: 16,
     },
});
