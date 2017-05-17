import React, {Component} from 'react';
import {
    Container,
    Content,
    ListItem,
    Text,
    CheckBox,
    Header,
    Left,
    Button,
    Icon,
    Right,
    Body,
    Title
} from 'native-base';

class HeaderApp extends Component {
  render(){
    return(
          <Header>
              <Body>
                  <Title style={{}}>Buah Tangan</Title>
              </Body>
              <Right>
                  <Button transparent onPress={()=>this.props.drawerAction()}>
                      <Icon name='cart'/>
                  </Button>
              </Right>
          </Header>
    )
  }
}

export default HeaderApp
