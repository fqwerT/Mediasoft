import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import { shallowEqual, useDispatch } from "react-redux";
import { Products } from "../Products/Products";
import { Button, Typography } from "@mui/material";
import "./style.css";
import { calculateTotalPrice } from "./utils";
import { PAY } from "../../store/ActionTypes";

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useTypeSelector((state) => state.cart.cart, shallowEqual);
  const totalPrice = useMemo(() => {
    if (cart.length !== 0) {
      return calculateTotalPrice(cart);
    }
    return 0;
  }, [cart]);

  return (
    <div className="cart">
      <>
        {cart.length <= 0 ? (
          <Typography variant="h3">cart is emptily</Typography>
        ) : (
          <>
            <Products items={cart} type={"cart"} />
            <Typography variant="h6" sx={{ fontWeight: "400" }}>
              total price - <span className="cart__price">{totalPrice}$</span>{" "}
              <Button
                variant="outlined"
                onClick={() => dispatch({ type: PAY })}
              >
                Pay
              </Button>
            </Typography>
          </>
        )}
      </>
    </div>
  );
};
