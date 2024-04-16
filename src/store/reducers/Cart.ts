import { Action } from "redux";
import { ADD_ITEM, DELETE_ITEM, PAY } from "../ActionTypes";
import { FetchedProps } from "../../interface & types/interface";

interface stateProps {
  cart: any[];
  isPay: boolean;
}
const initialState: stateProps = {
  cart: [],
  isPay: false,
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
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case PAY:
      return {
        ...state,
        isPay: true,
      };
    default:
      return state;
  }
};
