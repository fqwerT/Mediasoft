import { FetchedProps } from "../../interface & types/interface";

export const checkStep = (cart: FetchedProps[], isPay: boolean) => {
  if (cart.length !== 0 && !isPay) {
    return 2;
  }
  if (isPay) {
    return 4;
  }
  if (cart.length === 0 && isPay) {
    return 1;
  }
};
