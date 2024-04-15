import { Dispatch } from "redux";
import { FetchedProps } from "../../interface & types/interface";
import { ADD_ITEM, DELETE_ITEM } from "../../store/ActionTypes";

const checkDuplicates = (array: FetchedProps[], item: FetchedProps) => {
  let value = false;
  array.forEach((i) => {
    if (i.id === item.id) {
      value = true;
      return value;
    }
  });
  return value;
};

export const handleAddCart = (
  dispatch: Dispatch,
  setState: any,
  state: boolean,
  item: FetchedProps,
  cart: FetchedProps[]
) => {
  setState(!state);
  const check = checkDuplicates(cart, item);
  if (state === false && !check) {
    dispatch({ type: ADD_ITEM, payload: item });
  }
  if (state === true) {
    dispatch({ type: DELETE_ITEM, payload: item.id });
  }
};
