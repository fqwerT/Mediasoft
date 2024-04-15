import { AppHeader } from "../AppHeader/AppHeader";
import { useFirstMountFetch } from "../../hooks/useFirstMountedFetch";
import { Products } from "../Products/Products";
import "./style.css";
export const ProductsList: React.FC = () => {
  const items = useFirstMountFetch("https://fakestoreapi.com/products?limit=4");
  return (
    <div className="home">
      <Products items={items} type={"home"}/>
    </div>
  );
};
