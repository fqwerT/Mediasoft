import { Dispatch } from "redux";
import { FetchedProps } from "../../interface & types/interface";
import { ADD_ITEM, DELETE_ITEM } from "../../store/ActionTypes";
export const handleAddCart = (
  dispatch: Dispatch,
  setState: any,
  state:boolean,
  item:FetchedProps
) => {
  dispatch({type:ADD_ITEM,payload:item})
  setState(!state)
   if (!state) {
    dispatch({type:DELETE_ITEM,payload:item.id})
   }
};
