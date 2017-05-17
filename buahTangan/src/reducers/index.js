import { combineReducers } from 'redux';

import ItemReducer from './itemReducer';
import CartReducer from './cartReducer'

const RootReducer = combineReducers({
  items: ItemReducer,
  cart:CartReducer,
});

export default RootReducer;
