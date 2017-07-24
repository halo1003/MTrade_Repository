/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './components/Login';
import Main from './components/Main';
import styles from './styles/styles';

import { Router, Scene } from 'react-native-router-flux';
import { Provider,connect } from 'react-redux';

class App extends Component{
  render() {
    if (this.props.authorized){
      return (
        <View style = {styles.container}>
          <Main/>
        </View>
      );
    }else{
      return (
        <View style = {styles.container}>
          <Login/>
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
