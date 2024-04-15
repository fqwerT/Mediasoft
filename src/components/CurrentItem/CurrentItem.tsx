import React from "react";
import { useParams } from "react-router";
import { useFirstMountFetch } from "../../hooks/useFirstMountedFetch";
import { ItemCard } from "../itemCard/ItemCard";
import { FetchedProps } from "../../interface & types/interface";
import Rating from "@mui/material/Rating";
import "./style.css";
import { Typography } from "@mui/material";
export const CurrentItem: React.FC = () => {
  const { id } = useParams();
  const product = useFirstMountFetch(`https://fakestoreapi.com/products/${id}`);
  return (
    <div className="product">
      {product && (
        <div className="product__entites">
          <ItemCard item={product} type={"home"} />
          <div>
          <Rating name="read-only" value={product.rating.rate} readOnly />
          <Typography>Rating {product.rating.rate}</Typography>
          </div>
         
        </div>
      )}
    </div>
  );
};
