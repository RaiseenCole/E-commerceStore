import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// domaine : dev-yrpdpope.us.auth0.com
// client id : 0JvAxHJ7hFpe4FI2mcT8eVKFagy9onKe

ReactDOM.render(
  <Auth0Provider
    domain="dev-yrpdpope.us.auth0.com"
    clientId="0JvAxHJ7hFpe4FI2mcT8eVKFagy9onKe"
    redirectUri={window.location.origin}
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
