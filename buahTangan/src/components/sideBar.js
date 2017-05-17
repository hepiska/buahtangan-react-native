import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text, Image} from 'react-native';
import { Spinner } from 'native-base';
import { fetchItem } from '../actions';
import Cart from './cart'

class SideBar extends Component {
  render(){
    return(
      <View>
        <Cart />
      </View>
    )
  }
}

export default SideBar
