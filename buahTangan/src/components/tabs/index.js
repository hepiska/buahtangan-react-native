import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Container, Content, Footer, FooterTab,Conent, Button, Icon, Text,StyleProvider } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { fetchItem } from '../../actions';

class AppTabs extends Component {
  constructor(props){
    super(props);
    this.state={
      buttonIsActive:[{name:'all',active:true},
                      {name:'food',active:false},
                      {name:'snack',active:false},
                      {name:'sovenier',active:false}],
    }
  };
  changeButtonActive(tabName){
    const newButtonActive=this.state.buttonIsActive.map(button =>{
      console.log(button);
      if (tabName == button.name ) {
        button.active=true
      } else {
        button.active=false
      }
      return button
    })
    this.setState({buttonIsActive:newButtonActive})
  }
  tabsMove(tabName){
    this.changeButtonActive(tabName);
    this.props.changeCategori(tabName);
    this.props.fetchItem(tabName);
    //console.log(tabName);
  }
  render() {
    const {buttonIsActive} = this.state;
    return (
      <Footer >
          <FooterTab style={{backgroundColor:'black'}} >
              <Button
                vertical active={buttonIsActive[0].active}
                onPress={()=>this.tabsMove('all')}>
                  <Icon active={buttonIsActive[0].active}  name="ios-radio-button-off" />
                  <Text>All</Text>
              </Button>
              <Button vertical active={buttonIsActive[1].active}  onPress={()=>this.tabsMove('food')}>
                  <Icon active={buttonIsActive[1].active} name="ios-restaurant" />
                  <Text>Food</Text>
              </Button>
              <Button vertical active={buttonIsActive[2].active} onPress={()=>this.tabsMove('snack')}>
                  <Icon active={buttonIsActive[2].active}  name="ios-pizza"/>
                  <Text>Snack</Text>
              </Button>
              <Button vertical active={buttonIsActive[3].active}  onPress={()=>this.tabsMove('sovenier')}>
                  <Icon active={buttonIsActive[3].active} name="ios-shirt"  />
                  <Text>Sovenier</Text>
              </Button>
          </FooterTab>
      </Footer>
    );
  }
  }

  const mapDispatchToProps = dispatch =>({fetchItem:categories => dispatch(fetchItem(categories))})
  export default connect(null,mapDispatchToProps)(AppTabs)
