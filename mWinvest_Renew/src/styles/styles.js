const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  mainQuote:{
    flex: 1,
    flexDirection: 'row'
  },

  ListQute:{
    flex: 1
  },

  grid:{
    flex: 3
  },

  container:{
    flex:1,
    // backgroundColor: 'yellow',
    // padding:50,
    marginHorizontal: 5,

  },
  box:{
      flex:1,
      marginHorizontal: 5,
      borderWidth:1,
      padding:30,
  },
  buttonSellBuy:{
      flex:1,
      marginHorizontal: 5,
      padding:30,
      borderWidth:1,
  },
  TextSymbol:{
      flex:1,
      justifyContent:'center',
      marginHorizontal: 5,
      padding:30,
      borderWidth:1,

  },

  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    flex:1,
    width:100
  },
  orderButton:{
    flex:1,
    alignItems: 'center',
    flexDirection:'row'

  }
})

module.exports = styles
module.exports.constants = constants;
