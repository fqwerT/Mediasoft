import React, { memo,useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FetchedProps } from "../../interface & types/interface";
interface CardProps {
  title: string;
  value: string;
  src: string;
  price: string | number;
  item:FetchedProps

}

export const ItemCard: React.FC<CardProps> = memo(
  ({ title, value, src, price,item }) => {


    const [add,setAdd] = useState<boolean>(true)
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={src} alt="img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value}
            </Typography>

            <Typography variant="h4" color="text.secondary">
              {price}$
            </Typography>
          </CardContent>
        </CardActionArea>


      </Card>
    );
  }
);


// <Button variant="outlined" startIcon={<AddShoppingCartIcon/>} onClick={() => handleAddToCart(i)}>
// {/* + Add to cart */}
//  {
//    add ? ' + Add to cart' : ' - Remove from cart'
//  }
// </Button>