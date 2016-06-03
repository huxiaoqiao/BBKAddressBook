
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  Platform,
  TouchableOpacity,
  Alert,
    StatusBarIOS
} from 'react-native';

import TabBar from 'react-native-xtabbar';

import Contact from './contact';
import Notice from './notice';
import Living from './living';
import Setting from './setting';
import WebPage from './webPage';
import Service from './service';
import Utils from './utils';

var i = 0;

StatusBarIOS.setStyle('light-content');

export default class Index extends Component {

  constructor(){
    super();
  }


  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  addNavigator(name,component){
    
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{name:name, component: component}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navContainer}
            routeMapper={
              {
                // 左键
                LeftButton(route, navigator, index, navState) {
                  if (index > 0) {
                    return (
                      <View style={styles.navContainer}>
                        <TouchableOpacity
                          underlayColor='transparent'
                          onPress={() => {if (index > 0) {navigator.pop()}}}>
                          <Text style={styles.leftNavButtonText}>
                            返回
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  } else {
                    return null;
                  }
                },
                // 右键
                RightButton(route, navigator, index, navState) {
                  if (route.onPress)
                    return (
                      <View style={styles.navContainer}>
                        <TouchableOpacity
                          onPress={() => route.onPress()}>
                          <Text style={styles.rightNavButtonText}>
                            {route.rightText || '右键'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                },
                // 标题
                Title(route, navigator, index, navState) {

                  return (
                    <View style={styles.navContainer}>
                      <Text style={styles.title}>
                        {index > 0?route.passProps.title:name}
                      </Text>
                    </View>
                  );
                }
              }
            }/>}
        />
    );
  }

  render() {
    return (
            <TabBar style={styles.tabContentStyle}>
              <TabBar.Item
                  icon={require('./pic/icon_tab_contact.png')}
                  selectedIcon={require('./pic/icon_tab_contact_selected.png')}
                  onPress={() => {
                      console.log("first onPress");
                  }}
                  title='联系人'>
                    {this.addNavigator('联系人',Contact)}
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./pic/icon_tab_calllog.png')}
                  selectedIcon={require('./pic/icon_tab_calllog_selected.png')}
                  title='公告'>
                  {this.addNavigator('公告',Notice)}
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./pic/icon_tab_Dial.png')}
                  selectedIcon={require('./pic/icon_tab_Dial_selected.png')}
                  title='自助服务'>
                  {this.addNavigator('自助服务',Living)}
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./pic/icon_tab_setting.png')}
                  selectedIcon={require('./pic/icon_tab_setting_selected.png')}
                  title='管理'>
                  {this.addNavigator('管理',Setting)}
              </TabBar.Item>
            </TabBar>

    );
  }
}

const styles = StyleSheet.create({
        tabContentStyle:{
          flex: 1,
        },
        text:{
          justifyContent:'center',
          alignItems:'center',
        },
        // 导航栏
       navContainer: {
         backgroundColor: '#0C519F',
         paddingTop: 12,
         paddingBottom: 10,

       },
       title:{
        color:'white',
        fontSize: 18,
        textAlign: 'center',
       },
       leftNavButtonText:{
         color: 'white',
          fontSize: 16,
          marginLeft: 13,
       }
});
