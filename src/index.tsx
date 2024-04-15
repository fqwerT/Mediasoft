
import './index.css';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Home } from './components/Home/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { store } from './store/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Home/>
    ),
  },
  {
    path: "/cart",
    element: <div>About</div>,
  },
  {
    path: "/id",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>

);

