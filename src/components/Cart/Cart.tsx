import React from "react";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import { shallowEqual } from "react-redux";
import { Products } from "../Products/Products";
import { Typography } from "@mui/material";
import "./style.css";
export const Cart: React.FC = () => {
  const cart = useTypeSelector((state) => state.cart.cart, shallowEqual);
  return (
    <div className="cart">
      {cart.length !== 0 ? (
        <Products items={cart} type={'cart'}/>
      ) : (
        <Typography variant="h3">Cart is empty yet</Typography>
      )}
    </div>
  );
};
