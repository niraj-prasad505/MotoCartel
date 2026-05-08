import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { getCurrentUser } from "../services/authService";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        getCurrentUser()
            .then((res) => {
                setUser(res.data.user);
            })
            .catch(() => {
                setUser(null);
            });

    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;