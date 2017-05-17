import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text, Image} from 'react-native';
import { Spinner } from 'native-base';
import CartList from './cartList'

class Cart extends Component {
  render(){
    return(
      <View>
        <CartList />
      </View>
    )
  }
}

export default Cart
