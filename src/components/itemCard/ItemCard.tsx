import React, { memo, useState, useCallback, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FetchedProps } from "../../interface & types/interface";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import { deleteFromCart, handleManageCart } from "./utils";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";

interface CardProps {
  item: FetchedProps;
  type: string;
}

export const ItemCard: React.FC<CardProps> = memo(({ item, type }) => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState<boolean>(false);
  const cart = useTypeSelector((state) => state.cart.cart, shallowEqual);
  const navigate = useNavigate();
  const handleControllCart = useCallback(
    (item: FetchedProps) => {
      handleManageCart(dispatch, setAdd, add, item, cart);
    },

    [cart, add, cart]
  );

  const handleDeleteCart = useCallback(
    (item: FetchedProps) => {
      deleteFromCart(item, dispatch);
    },
    [cart]
  );

  const handleItemPage = () => {
    navigate(`/item/${item.id}`);
  };
  console.log("render");
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={(e) => handleItemPage()}>
        <CardMedia component="img" height="300" image={item.image} alt="img" />
        <CardContent>
          {type !== "page" && (
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
          )}

          {type !== "page" && (
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {type === "cart" && (
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={() => handleDeleteCart(item)}
        >
          - Remove from cart
        </Button>
      )}

      {type === "home" && (
        <Button
          variant="outlined"
          startIcon={add ? <DeleteIcon /> : <AddShoppingCartIcon />}
          onClick={() => handleControllCart(item)}
        >
          {add ? " - Remove from cart" : `${item.price}$ Add to cart`}
        </Button>
      )}
    </Card>
  );
});
