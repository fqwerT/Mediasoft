import React, { useCallback, useState } from "react";
import { useParams } from "react-router";
import { useFirstMountFetch } from "../../hooks/useFirstMountedFetch";
import { ItemCard } from "../itemCard/ItemCard";
import { FetchedProps } from "../../interface & types/interface";
import Rating from "@mui/material/Rating";
import "./style.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { handleManageCart } from "../itemCard/utils";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import { shallowEqual } from "react-redux";
export const CurrentItem: React.FC = () => {
  const { id } = useParams();
  const product = useFirstMountFetch(`https://fakestoreapi.com/products/${id}`);
  const [add, setAdd] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cart = useTypeSelector((state) => state.cart.cart, shallowEqual);
  const handleSwitchCart = useCallback(() => {
    handleManageCart(dispatch, setAdd, add, product, cart);
  }, [add, product]);
  return (
    <div className="product">
      {product && (
        <div className="product__entites">
          <ItemCard item={product} type={"page"} />
          <div>
            <Rating name="read-only" value={product.rating.rate} readOnly />
            <Typography>Rating {product.rating.rate}</Typography>
            <section>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography sx={{ maxWidth: "300px", marginTop: "10px" }}>
                {product.description}
              </Typography>

              <Button
                variant="outlined"
                startIcon={add ? <DeleteIcon /> : <AddShoppingCartIcon />}
                onClick={() => handleSwitchCart()}
                sx={{ marginTop: "10px" }}
              >
                {add ? " - Remove from cart" : `${product.price}$ Add to cart`}
              </Button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
