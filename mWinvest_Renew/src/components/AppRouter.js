// import React, { Component } from 'react';
//
// import {
//   View,
// } from 'react-native';
//

//

//
// const AppRouter = () => {
//   return(
//     <Router>
//       <Scene key='root'>
//
//           <Scene
//           tabs
//           key='tabbar'
//           tabBarStyle={{backgroundColor:'#000000'}}
//           tabBarPosition='bottom'
//           >
//             <Scene key='Price' title="PRICE" icon={TabIcon}>
//               <Scene
//                 key='Price'
//                 component={StockList}
//                 title='Price'
//                 />
//
//             </Scene>
//
//             <Scene key='Order' title="ORDER" icon={TabIcon}>
//               <Scene
//                 key='Order'
//                 component={Order}
//                 title='Order'
//                 />
//
//             </Scene>
//
//         </Scene>
//       </Scene>
//     </Router>
//
//   );
// }
// export default AppRouter;

import React, { Component } from 'react';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text } from 'native-base';

  import {Router, Scene,Actions} from 'react-native-router-flux';

  import StockList from './StockList';
  import Order from './Order';
  import Portfolio from './Portfolio';

class AppRouter extends Component {
  tabaction(tab){
    if(tab === 'StockList'){
      Actions.StockList();
    }
    else if (tab === 'Order') {
      Actions.Order();
    }
    else {
      Actions.Portfolio();
    }
  }
  render() {
    return (
      <Container>
          <Router>
            <Scene key='root'>
            <Scene key="StockList" component={StockList} title="StockList"/>
            <Scene key="Order" component={Order} title="Order"/>
            <Scene key="Portfolio" component={Portfolio} title="Portfolio"/>
            </Scene>
          </Router>
        <Content />
        <Footer>
          <FooterTab>
            <Button active onPress={()=>{this.tabaction('StockList')}} >
              <Icon name="apps" />
              <Text>StockList</Text>
            </Button>
            <Button onPress={()=>{this.tabaction('Order')}}>
              <Icon name="camera" />
              <Text>Order</Text>
            </Button>
            <Button onPress={()=>{this.tabaction('Portfolio')}} >
              <Icon active name="navigate" />
              <Text>Portfolio</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default AppRouter;
