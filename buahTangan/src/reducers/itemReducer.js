import { FETCH_ITEM } from '../actions/constans';

const initialState = [];

const ItemReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_ITEM : {
      const newstate = action.payload;
      return newstate;
    }
    default:return state;
  }
};

export default ItemReducer;
