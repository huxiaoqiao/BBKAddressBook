'use strict'

import React,{Component} from 'react';

import {
  View,
  Text,
  ListView,
  StyleSheet,
} from 'react-native';

import ContactCell from './contactCell';

export default class  Contact_list extends Component {

  constructor() {
    super();
    this.state = {
    };
    //必须绑定，否则onPress报错
    //this._renderRow = this._renderRow.bind(this);
  }

  componentWillMount() {

    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };
    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID];
    };

    var ds = new ListView.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    var items = this.props.data.status ? this.props.data.data: [];

    var dataBlob = {};
    var sectionIDs = [];
    var sectionNames = ['部长','项目经理','文员','软件科','产品规划科','产品体验设计科','电子科','外销科']
    var rowIDs = [];
    for (var ii = 0; ii < sectionNames.length; ii++) {
      var sectionName = 'Section ' + ii;
      sectionIDs.push(sectionName);
      dataBlob[sectionName] = sectionNames[ii];
      rowIDs[ii] = [];
    }

    var rowName;
      var i = 0,j = 0,k = 0,l = 0,m = 0,n = 0,o = 0,p = 0;
    for(var jj = 0;jj < items.length; jj++){
      var item = items[jj];

      if (item.group.toString() == '部长'){
          rowName = 'S' + 0 + ',R' + i;
          i++;
        rowIDs[0].push(rowName);
        }
      if (item.group.toString() == '项目经理'){
        rowName = 'S' + 1 + ',R' + j;
        j++;
        rowIDs[1].push(rowName);

      }
      if (item.group.toString() == '文员'){
        rowName = 'S' + 2 + ',R' + k;
        k++;
        rowIDs[2].push(rowName);

      }
      if (item.group.toString() == '软件科'){
        rowName = 'S' + 3 + ',R' + l;
        l++;
        rowIDs[3].push(rowName);
      }
      if (item.group.toString() == '产品规划科'){
        rowName = 'S' + 4 + ',R' + m;
        m++;
        rowIDs[4].push(rowName);
      }
      if (item.group.toString() == '产品体验设计科'){
        rowName = 'S' + 5 + ',R' + n;
        n++;
        rowIDs[5].push(rowName);
      }
      if (item.group.toString() == '电子科'){
        rowName = 'S' + 6 + ',R' + o;
        o++;
        rowIDs[6].push(rowName);
      }
      if (item.group.toString() == '外销科'){
        rowName = 'S' + 7 + ',R' + p;
        p++;
        rowIDs[7].push(rowName);
      }

      dataBlob[rowName]=item;


      }


    this.setState({
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
    });

  }

  render(){

    return (
      <View style={styles.container}>
        <ListView
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderSectionHeader={(sectionData) =>
              <View style={styles.section}>
                <Text style={{color: 'black',paddingHorizontal: 8}}>
                  {sectionData}
                </Text>
              </View>
            }
            renderRow={(rowData) =>
              <ContactCell
                data={rowData}
              />
            }
        />
      </View>
    );

  }


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  listView:{
    marginTop:64,
  },
  section:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    padding:6,
    backgroundColor:'#F6F6F6',
  }
});
