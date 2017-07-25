import React, { Component } from 'react';
<<<<<<< HEAD
import {View,Text,StyleSheet,TouchableOpacity } from 'react-native';

import style from '../styles/styles';

import { Actions } from 'react-native-router-flux';

class Portfolio extends Component{
    render(){
      return(
        <View>
            <Text>
                  Welcome Portfolio!!!!
            </Text>

        </View>

      );

    }
}
export default Portfolio;
=======
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Portfolio extends Component {
  render() {
    return (
      <View>
        <Text>I'm the Portfolio component</Text>
      </View>
    );
  }
}
>>>>>>> c3ea57c91d9fea34470c8d111c5f8a91d3a7efae
