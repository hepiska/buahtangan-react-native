import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View,Text} from 'react-native';
import { Container, Content, StyleProvider,Button } from 'native-base';
import HeaderApp from './header'
import AppTabs from './tabs';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import store from '../store';
import SideBar from './sideBar'
import RenderContent from './content'
import Drawer from 'react-native-drawer'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      categori:'all'
    }
  };
  changeCategori(categori){
    console.log(categori);
    this.setState({categori:categori})
  }
  closeDrawer = () => {
    this.drawer.root.close()
  };
  openDrawer = () => {
    if (this._drawer.state.open) {
    this._drawer.close()
    } else {
    this._drawer.open()
    }
  };
  render(){
    const {categori} = this.state;
    return(
      <StyleProvider style={getTheme(material)}>
          <Container>
            <HeaderApp drawerAction={()=> this.openDrawer()}/>
            <Drawer
              ref={(ref) => this._drawer = ref}
              onOpen={()=>this._drawer.setState({open: true})}
              onClose={()=>this._drawer.setState({open: false})}
              content={<SideBar />}
              >
              <Content>
              <RenderContent categories={categori} />
              </Content>
            <AppTabs changeCategori={(categori)=>this.changeCategori(categori)}/>
           </Drawer>
          </Container>
      </StyleProvider>
    )
  }
}

const ConnectedApp = () =>(<Provider store={store}><App /></Provider>)

export default ConnectedApp
