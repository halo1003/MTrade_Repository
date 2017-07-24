import React, { Component, PropTypes } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList, ListView} from 'react-native';
import Data from '../component/Data';
import firebase from '../API/api';
import style from '../Style/Styles';
const styles = require('../Style/Styles');

export default class Order extends Component{
    constructor(props){
        super(props);
        userID = Data.getID();
        this.loadData = this.loadData.bind(this);
        buyData=[];
        sellData=[];
        this.state={
          dataSourceBuy: new ListView.DataSource({rowHasChanged:(r1, r2) => r1!=r2}),
          dataSourceSell: new ListView.DataSource({rowHasChanged:(r1, r2) => r1!=r2}),
        }
        this.renderRowBuy = this.renderRowBuy.bind(this);
        this.renderRowSell = this.renderRowSell.bind(this);
    }
    loadData(){
      rootBuy = firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/BUY').on('value', (snap) => {
        snap.forEach((data) =>{
          buyData.push({
            key: data.key,
            data: data.val()
          });
        });
        console.log(buyData.length);
      });
      rootSell = firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/SELL').on('value', (snap) => {
        snap.forEach((data) =>{
          sellData.push({
            key: data.key,
            data: data.val()
          });
        });
        console.log(sellData.length);
      });
    }
    renderRowBuy(data){

    }
    renderRowSell(){

    }
    componentWillMount(){
      this.loadData();
    }
    render(){
    const { navigate } = this.props.navigation;
      return(
        <View style={style.listview}>
          <ListView
            dataSource= {this.state.dataSourceBuy}
            renderRow= {this.renderRowBuy}
          />
        <View/>
        // <View>
        //   <View>
        //     <Text>BUY LIST</Text>
        //     <FlatList
        //       data={buyData}
        //       renderItem={({item})=>
        //         <View style={style.box}>
        //           <Text>{item.key}</Text>
        //           <Text>{item.data.Market}</Text>
        //           <Text>{item.data.good_till_date}</Text>
        //           <Text>{item.data.gross_amount}</Text>
        //           <Text>{item.data.name}</Text>
        //           <Text>{item.data.order_type}</Text>
        //           <Text>{item.data.qty}</Text>
        //           <Text>{item.data.symbol}</Text>
        //         </View>
        //       }
        //     />
        //   </View>
        //   <View>
        //     <Text>SELL LIST</Text>
        //     <FlatList
        //       data={sellData}
        //       renderItem={({item})=>
        //         <View>
        //           <Text>{item.key}</Text>
        //           <Text>{item.data.Market}</Text>
        //           <Text>{item.data.good_till_date}</Text>
        //           <Text>{item.data.gross_amount}</Text>
        //           <Text>{item.data.name}</Text>
        //           <Text>{item.data.order_type}</Text>
        //           <Text>{item.data.qty}</Text>
        //           <Text>{item.data.symbol}</Text>
        //         </View>
        //       }
        //     />
        //   </View>
        // </View>
      );
    }
    componentDidMount(){

    }
}
