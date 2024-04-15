import { Action } from "redux";
import { ADD_ITEM, DELETE_ITEM } from "../ActionTypes";

interface stateProps {
cart:any[]
}
const initialState:stateProps = {
  cart: []
};




export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((i) => i.id === action.payload.id),
      };
    default:
      return state;
  }
};

