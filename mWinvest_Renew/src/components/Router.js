import React, { Component } from 'react';
import{StackNavigator,TabNavigator} from 'react-navigation';
import Main from '../layout/Main';
import Order from '../layout/Order'

export const MainStack = StackNavigator({
  Home:{
        screen: Main ,
        navigationOptions:{
          title:'Price'
        }
      }

});

 export const OrderStack = StackNavigator({
  Order:{
    screen: Order,
    navigationOptions:{
      title:'Order'
    }
  }
})

export const Tabbar = TabNavigator({
    Home : {
      screen : MainStack

    },
    Order : {
      screen : OrderStack
    }
  },
  {
    tabBarPosition:'bottom'
  }
)
