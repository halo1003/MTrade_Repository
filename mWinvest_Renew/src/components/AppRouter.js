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
        <Header>
         <Left>
           <Button transparent>
             <Icon name='arrow-back' />
           </Button>
         </Left>
         <Body>
           <Title>
             {this.props.Order ? 'Orders' : this.props.Portfolio ? 'Portfolios':  'Quotes'}
           </Title>
         </Body>
         <Right>
           <Button transparent>
             <Icon name='menu' />
           </Button>
         </Right>
       </Header>

      {this.props.Order ? <Order/> : this.props.Portfolio ? <Portfolio/>:<StockList/>}

      <Content/>

        <Footer>
          <FooterTab>
            <Button active onPress={()=>{this.tabaction('StockList')}} >
              <Icon name="apps" />
              <Text>Quotes</Text>
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
