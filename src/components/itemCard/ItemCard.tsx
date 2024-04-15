import React, { memo, useState, useCallback } from "react";
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
import { handleAddCart } from "./utils";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
interface CardProps {
  // title: string;
  // value: string;
  // src: string;
  // price: string | number;
  item: FetchedProps;
  type: string;
}

export const ItemCard: React.FC<CardProps> = memo(
  ({item, type }) => {
    const dispatch = useDispatch();
    const [add, setAdd] = useState<boolean>(false);
    const cart = useTypeSelector((state) => state.cart.cart, shallowEqual);
    const navigate = useNavigate()
    const handleAddToCart = useCallback(
      (item: FetchedProps) => {
        handleAddCart(dispatch, setAdd, add, item, cart);
      },
      [cart, add, cart]
    );

    const handleItemPage = () => {
  
      navigate(`/item/${item.id}`)
    }
    return (
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea onClick={(e)=> handleItemPage()}>
          <CardMedia component="img" height="300" image={item.image} alt="img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {type === "cart" ? (
          <></>
        ) : (
          <Button
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => handleAddToCart(item)}
          >
            {add ? " - Remove from cart" : `${item.price}$ Add to cart`}
          </Button>
        )}
      </Card>
    );
  }
);
