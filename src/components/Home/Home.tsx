import { AppHeader } from "../AppHeader/AppHeader";
import { useFirstMountFetch } from "../../hooks/useFirstMountedFetch";
import { Products } from "../Products/Products";
import "./style.css";
export const Home: React.FC = () => {
  const items = useFirstMountFetch("https://fakestoreapi.com/products");
  console.log('render')
  return (
    <div className="home">
      <AppHeader />
      <Products items={items} />
    </div>
  );
};
