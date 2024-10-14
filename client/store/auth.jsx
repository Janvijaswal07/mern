/* eslint-disable react/prop-types */
import { createContext, useContext,useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token ,setToken]=useState(localStorage.getItem("token"));
    let isLoggedIn=!! token;
    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
    };
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ storeTokenInLS,LogoutUser,isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};