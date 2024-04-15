import React, { useEffect,useState,useCallback } from "react";
import { FetchedProps } from "../../interface & types/interface";
import { ItemCard } from "../itemCard/ItemCard";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../store/ActionTypes";
import "./style.css";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import { handleAddCart } from "./utils";
interface ProductsProps {
  items: FetchedProps[] | null;
}
export const Products: React.FC<ProductsProps> = ({ items }) => {
const dispatch = useDispatch()
const cartProducts = useTypeSelector((state) => state.cart.cart)
const [add,setAdd] = useState<boolean>(true)
const cart = useTypeSelector((state) => state.cart.cart)

const handleAddToCart = useCallback((item:FetchedProps) => {
  handleAddCart(dispatch,setAdd,add,item)
},[cart])

  return (
    <div className="products"> 
      {items?.map((item: FetchedProps) => (
        <section key={item.id} id={String(item.id)} className="products__card">
          <ItemCard
            title={item.title}
            value={item.description}
            src={item.image}
            price={item.price}
            item={item}
          />
        </section>
      ))}
    </div>
  );
};
