import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListView, ScrollView,TextInput } from 'react-native';
import styles from '../styles/styles';
import { Actions } from 'react-native-router-flux';

const ActionButton = require('../containers/ActionButton');


export default class Order extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state= {
          symbol:'',
          dataSource: ds.cloneWithRows(['row1','row2']),
          // MANG DO DU LIEU TU DATABASE VE
          mang:[]
        };
      }


    render() {
      return (

      <ScrollView style={styles.container}>
          <View style={styles.TextSymbol}>
          <TextInput
          onChangeText={(value) => this.setState({symbol: value})}
          placeholder="Symbol"
          />
          </View >

          <View style={styles.container}>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
            />
          </View>

          <View style={styles.orderButton}>
              <View style={styles.buttonSellBuy}>
              <ActionButton onPress= {this.onBuy} title="BUY">
              </ActionButton>
              </View>

              <View style={styles.buttonSellBuy}>
              <ActionButton onPress= {this.onSell} title="SELL">
              </ActionButton>
              </View>
          </View>
        </ScrollView>

      );
    }

    }
