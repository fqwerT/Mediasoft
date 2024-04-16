import { FetchedProps } from "../../interface & types/interface";

export const calculateTotalPrice = (array: FetchedProps[]) => {
  let price = 0;
  array.forEach((item: FetchedProps) => {
    price += item.price as number;
  });
  return price.toFixed(2);
};
