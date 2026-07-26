import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { getCurrentUser } from "../services/authService";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getCurrentUser()
            .then((res) => {
                setUser(res.data.user);
                // console.log(res.data.user);
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);


    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;