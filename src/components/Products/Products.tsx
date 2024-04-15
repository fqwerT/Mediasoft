import React, { useEffect,useState,useCallback } from "react";
import { FetchedProps } from "../../interface & types/interface";
import { ItemCard } from "../itemCard/ItemCard";
import "./style.css";
interface ProductsProps {
  items: FetchedProps[] | null ;
  type:string;
}
export const Products: React.FC<ProductsProps> = ({ items,type }) => {
  return (
    <div className="products"> 
      {items?.map((item: FetchedProps) => (
        <section key={item.id} id={String(item.id)} className="products__card">
          <ItemCard
            // title={item.title}
            // value={item.description}
            // src={item.image}
            // price={item.price}
            item={item}
            type={type}
          />
        </section>
      ))}
    </div>
  );
};
