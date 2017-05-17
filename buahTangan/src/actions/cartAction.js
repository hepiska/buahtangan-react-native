import { ADD_CART } from './constans';

export const addToCart = cartItem => ({ type: ADD_CART, payload: cartItem });
export const showCart = cartItems => ({ type: SHOW_CART, payload: cartItems });
