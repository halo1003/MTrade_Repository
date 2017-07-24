import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import styles from '../styles/styles';
import StockList from './StockList';
import Order from './Order';

const AppRouter = () => {
  return(
    <Router style = {styles.container}>
      <Scene key='root'>
          <Scene
          key='tabbar'
          tabs = {true}
          tabBarStyle={{backgroundColor:'#000000'}}
          tabBarPosition = 'bottom'>

          <Scene key='Price'
              component={StockList}
              title='Price'/>

          <Scene key='Order'
                component={StockList}
                title='Order'/>

        </Scene>
      </Scene>
    </Router>
  );
}

export default AppRouter;
