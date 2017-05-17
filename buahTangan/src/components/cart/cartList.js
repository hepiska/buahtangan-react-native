import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Image,ScrollView} from 'react-native';
import {
    Spinner,
    List,
    Thumbnail,
    Body,
    ListItem,
    Text,
    Container,
    Button,
    Content
} from 'native-base';
import {cartCount} from '../../selector'

class CartList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showCart: ''
        };
    }
    render() {
      console.log(this.state.showCart);
        return (
          <View>
            <ScrollView style={{height:'50%'}}>
                    {this.props.showcart.countCart.map(item => {
                        return (
                            <ListItem style={{height:70}}>
                                <Thumbnail square size={60} source={{
                                    uri: item.image
                                }}/>
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text>Rp:{item.price}</Text>
                                    <Text>{item.qty}</Text>
                                </Body>
                            </ListItem>
                        )
                    })}
              </ScrollView>
              <ListItem><Text>total: Rp{this.props.showcart.total}</Text></ListItem>
                <Button block>
                    <Text>Checkout</Text>
                </Button>
  </View>

        )
    }
}

const mapStateToProps = state => ({showcart: cartCount(state.cart)});
export default connect(mapStateToProps, null)(CartList)
