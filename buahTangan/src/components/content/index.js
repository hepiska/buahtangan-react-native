import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text, Image} from 'react-native';
import { Spinner } from 'native-base';
import ContentCard from './contentCard';
import { fetchItem } from '../../actions';


class RenderContent extends Component {
  componentDidMount(){
    this.props.fetchItem(this.props.categories)
  }
  render(){
    const {items} = this.props;
    console.log(items);
    if (items.length === 0) {
      return(<Spinner color='red' />)
    } else {
      return(
        <View style={{flex:1,flexWrap: 'wrap',flexDirection:'row'}}>
          {items.map(item =>(<ContentCard key={item.id} item={item}/>))}
        </View>
      )
    }
  }
}
const mapDispatchToProps= dispatch => ({fetchItem:(categories)=>dispatch(fetchItem(categories))})
const mapStateToProps = state => ({items:state.items})

export default connect(mapStateToProps,mapDispatchToProps)(RenderContent)
