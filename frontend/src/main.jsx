import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";

import UserContextProvider from "./context/UserContextProvider";
import WishlistContextProvider from "./context/WishlistContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <WishlistContextProvider>
        <App />
      </WishlistContextProvider>
    </UserContextProvider>
  </StrictMode>
);