/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './components/Login';
import StockList from './components/StockList';
import styles from './styles/styles';

import AppRouter from './components/AppRouter';
import { Provider,connect } from 'react-redux';

class App extends Component{
  render() {
    if (this.props.authorized){
      return (
        <View style = {styles.container}>
          <AppRouter/>
        </View>
      );
    }else{
      return (
        <View style = {styles.container}>
          <AppRouter/>
        </View>
      );
    }
  }
}
const mapStateToProps = (state,ownProps)=>{
  return {
    authorized:state.userReducer.authorized
  };
}

export default connect(mapStateToProps)(App);
