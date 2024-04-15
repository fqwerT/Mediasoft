import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ProductsList } from "./components/ProductsList/ProductsList";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { store } from "./store/Index";
import { Layout } from "./layouts/Layout";
import path from "path";
import { Cart } from "./components/Cart/Cart";
import { CurrentItem } from "./components/CurrentItem/CurrentItem";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductsList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/item/:id",
        element: <CurrentItem />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
