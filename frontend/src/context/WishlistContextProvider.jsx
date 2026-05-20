import React from "react";
import WishlistContext from "./WishlistContext";

export default function WishlistContextProvider({ children }) {

    const [wishlist, setWishlist] = React.useState([]);

    const addToWishlist = (item) => {

        setWishlist((prev) => [...prev, item]);

    };

    const removeFromWishlist = (id) => {

        setWishlist((prev) =>
            prev.filter((item) => item._id !== id)
        );

    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}