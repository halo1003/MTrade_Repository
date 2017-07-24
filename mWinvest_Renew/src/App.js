/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './components/Login';
import Main from './components/Main';
import styles from './styles/styles';
import store from './configStore';
import { Provider,connect } from 'react-redux';

const mainView = connect((state) =>({
      authorized:state.userReducer.authorized
    })
)(({authorized,dispatch})=>{
  if (authorized){
    return (<Main/>);
  }else{
    //dispatch(checkUserExists());
    return (<Login/>);
  }
});

class App extends Component{
  render() {
    return (
      <Provider store ={store}>
        <View style = {styles.container}>
          <Login/>
        </View>
      </Provider>
    );
  }
}

export default App;
