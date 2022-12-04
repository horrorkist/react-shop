import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "../lib/global-style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { RecoilRoot } from "recoil";
import Home from "./routes/Home";
import CategoryPage from "./routes/CategoryPage";
import NotFound from "./routes/404";
import Cart from "./routes/Cart";
import ProductDetail from "./routes/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "fashion",
        element: <CategoryPage />,
        errorElement: <NotFound />,
      },
      {
        path: "accessory",
        element: <CategoryPage />,
      },
      {
        path: "digital",
        element: <CategoryPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        errorElement: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
