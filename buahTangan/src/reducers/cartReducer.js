import { ADD_CART,DELETE_CART,SHOW_CART } from '../actions/constans';

const initialState = [];


const CartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CART : {
      if (state.length==0) {
        newId=1
      } else {
        const ids = state.map(item => item.id);
        const newId = Math.max(...ids) + 1;
      }
      const newCart = {
        id: newId,
        itemId:action.payload.id,
        name: action.payload.name,
        categories: action.payload.category,
        image: action.payload.image_url,
        price: action.payload.price,
      };
      const newstate = [...state, newCart];
      return newstate;
    }

    default:return state;
  }
};

export default CartReducer;
