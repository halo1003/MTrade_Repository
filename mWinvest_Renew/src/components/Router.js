import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import Main from './components/Main';
import Order from './components/Order';

const AppRouter = () => {
  return(
    <Router>
      <Scene key='root'>

          <Scene
          key='tabbar'
          tabs
          tabBarStyle={{backgroundColor:'#FFFFFF'}}
          >
            <Scene key='Price' title="PRICE" icon={TabIcon}>
              <Scene
                key='Price'
                component={Main}
                title='Price'
                />

            </Scene>

            <Scene key='Order' title="ORDER" icon={TabIcon}>
              <Scene
                key='Order'
                component={Order}
                title='Order'
                />

            </Scene>

        </Scene>

    </Router>

  );
}
