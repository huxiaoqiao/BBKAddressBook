'use strict'

import React,{
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
  } from 'react-native';

import Utils from './utils';
import WebPage from './webPage';

class SecondPage extends Component {
  render() {
    return (
      <WebPage></WebPage>
    );
  }
}


export default class Living extends Component {

  showUnavailableAlert(){
    Alert.alert('提示','此模块暂不可用');
  }


  gotoWebView(title,url, type = 'Normal') {
  this.props.navigator.push({
    component: WebPage,
    passProps: {
      url: url,
      title: title
    },
    type: type
  })
}

  render(){
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxContainer}>

          <View style={styles.boxView}>
            <TouchableOpacity
              onPress={this.showUnavailableAlert}
            >
              <Image source={require('./pic/kqcx.png')} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>考勤查询</Text>
          </View>


          <View style={styles.boxView}>
            <TouchableOpacity
              onPress={this.showUnavailableAlert}
            >
              <Image source={require('./pic/fkcx.png')} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>饭卡查询</Text>
          </View>
          <View style={styles.boxView}>
            <TouchableOpacity
              onPress={this.showUnavailableAlert}
            >
              <Image source={require('./pic/sdfcx.png')} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>水电费查询</Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.boxView}>
            <TouchableOpacity
              onPress={()=>this.gotoWebView('快递查询','http://m.kuaidi100.com', 'Modal')}
            >
              <Image source={require('./pic/kdcx.png')} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>快递查询</Text>
          </View>
          <View style={styles.boxView}>
            <TouchableOpacity
            onPress={()=>this.gotoWebView('天气查询','http://m.weather.com.cn','Modal')}
            >
              <Image source={require('./pic/tqcx.png')} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>天气查询</Text>
          </View>
          <View style={styles.boxView}>
            <TouchableOpacity
              onPress={()=>this.gotoWebView('号码百事通','http://dianhua.118114.cn:9088/collectionStock/o2oh5/home.html?channel=202','Modal')}
            >
              <Image source={require('./pic/hmbst.png')} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>号码百事通</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 64,
  },
  boxContainer:{
    width: Utils.size.width,
    height: Utils.size.width / 3,
    flexDirection:'row',
  },
  boxView:{
    width: Utils.size.width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: Utils.pixel,
  },
  icon:{
    width: 60,
    height:60,
    resizeMode: Image.resizeMode.contain,
  },
  text:{
    marginTop: 8,
    fontSize: 16,
  },
});
