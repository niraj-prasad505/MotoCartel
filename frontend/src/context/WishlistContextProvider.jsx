import React from "react";
import WishlistContext from "./WishlistContext";
import UserContext from "./UserContext";

export default function WishlistContextProvider({ children }) {

    const { user } = React.useContext(UserContext);
    const [wishlist, setWishlist] = React.useState([]);

    React.useEffect(() => {

        if (user?.wishlist) {
            setWishlist(user.wishlist);
        } else {
            setWishlist([]);
        }

    }, [user]);


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