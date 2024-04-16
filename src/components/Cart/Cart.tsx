import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import { shallowEqual } from "react-redux";
import { Products } from "../Products/Products";
import { Typography } from "@mui/material";
import "./style.css";
import { calculateTotalPrice } from "./utils";

export const Cart: React.FC = () => {
  const cart = useTypeSelector((state) => state.cart.cart, shallowEqual);
  const [cartSource, setCartSource] = useState<any>();
  const firstMount = useRef(true);
  const totalPrice = useMemo(() => {
    if (cart.length !== 0) {
      return calculateTotalPrice(cart);
    }
    return 0;
  }, [cart]);

  return (
    <div className="cart">
      <>
        <Products items={cart} type={"cart"} />
        <Typography variant="h6">total price - {totalPrice}$</Typography>
      </>
    </div>
  );
};
