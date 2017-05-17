import React from 'react';
import {View, Image} from 'react-native';
import { connect } from 'react-redux';
import { Thumbnail, H2, Text, Button, Icon, Left, Body } from 'native-base';
import { addToCart } from '../../actions/cartAction'

const styles = {
   card:{
     width:'48%',
     borderWidth:2,
     marginTop:5,
     marginLeft:3,
     marginRight:3,
     borderColor:'#808e95',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     shadowRadius: 1.5,
     elevation: 3,
     paddingTop:5,
     backgroundColor:'#e2f1f8',
     borderRadius:8
   },
   cardHeader:{
     height:40,
     paddingLeft:20,
     paddingRight:20,
     paddingTop:2,
     paddingButtom:2,
     alignItems:'center',
     justifyContent:'space-between',
     borderBottomWidth:1,
     flexDirection:'column',
     borderColor:'#808e95'},
     cardFotter:{height:30,
      paddingTop:5,
      height:30,
      borderColor:'#808e95'}
}

class  ContentCard extends React.Component {
  render(){
    return(
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={{fontSize:12}}>{this.props.item.name}</Text>
        <Text style={{fontSize:12}}>Rp: {this.props.item.price}</Text>
      </View>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
         <Image style={{width:"60%",height:175}} source={{uri:this.props.item.image_url}} />
      </View>
      <Button light full style={{backgroundColor:'#e2f1f8'}}
        onPress={()=>this.props.addToCart(this.props.item)}>
          <Icon name='cart' />
          <Text>Add To Cart</Text>
      </Button>
    </View>
    )
  }

}


const mapDispatchToProps = dispatch =>({addToCart:(cartItem)=>dispatch(addToCart(cartItem))})

export default connect(null,mapDispatchToProps) (ContentCard)
