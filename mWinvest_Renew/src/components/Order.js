// import React, { Component, PropTypes } from 'react';
// import {View,Text,StyleSheet,TouchableOpacity,FlatList, ListView} from 'react-native';
// import Data from './Data';
// import firebase from '../API/api';
// import style from '../styles/styles';
//
// export default class Order extends Component{
//     constructor(props){
//         super(props);
//         userID = Data.getID();
//         this.loadData = this.loadData.bind(this);
//         buyData=[];
//         sellData=[];
//         this.state={
//           dataSourceBuy: new ListView.DataSource({rowHasChanged:(r1, r2) => r1!=r2}),
//           dataSourceSell: new ListView.DataSource({rowHasChanged:(r1, r2) => r1!=r2}),
//         }
//         this.renderRowBuy = this.renderRowBuy.bind(this);
//         this.renderRowSell = this.renderRowSell.bind(this);
//     }
//     loadData(){
//       rootBuy = firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/BUY').on('value', (snap) => {
//         snap.forEach((data) =>{
//           buyData.push({
//             key: data.key,
//             data: data.val()
//           });
//         });
//         console.log(buyData.length);
//       });
//       rootSell = firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/SELL').on('value', (snap) => {
//         snap.forEach((data) =>{
//           sellData.push({
//             key: data.key,
//             data: data.val()
//           });
//         });
//         console.log(sellData.length);
//       });
//     }
//
//
//     componentWillMount(){
//       this.loadData();
//     }
//     render(){
//       return(
//         <View style={style.listview}>
//           <ListView
//             dataSource= {this.state.dataSourceBuy}
//             renderRow= {this.renderRowBuy} />
//         </View>
//       );
//     }
// }

/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Order extends Component {
  render() {
    return (
      <View>
        <Text>I'm the Order component</Text>
      </View>
    );
  }
}
