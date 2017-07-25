import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from '../styles/styles';

class StockList extends Component {

    constructor(props) {
        super(props);
        this.state= {
          // MANG DO DU LIEU TU DATABASE VE
          mang:[
            {Ten : "Ma Chung Khoan" },
            {Ten: "Gia" },
            {Ten: "So Luong"},
            {Ten:"Ngay giao dich"},
            {Ten:"Trang Thai"},
            {Ten : "HKI" },
            {Ten: "16243612" },
            {Ten: "10"},
            {Ten:"21-07-2017"},
            {Ten:"Cho Khop"},
            { Ten : "AAA" },
            {Ten: "263416" },
            {Ten: "20"},
            {Ten:"22-07-2017"},
            {Ten:"Da Ban"},
            { Ten : "MMA" },
            {Ten: "3765137" },
            {Ten: "15"},
            {Ten:"23-07-2017"},
            {Ten:"Da Mua"}


        ]
        };
      }

    render() {
      return (
      <ScrollView horizontal={true}>
        <FlatList
          data={this.state.mang}
          renderItem={({ item }) =>
            <View style={styles.box}>
              <Text>{item.Ten}</Text>
            </View>

          }
          horizontal={false}
          numColumns={5}
        />
        </ScrollView>
      );
    }
}

export default StockList;
