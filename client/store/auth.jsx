/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
    };

    return (
        <AuthContext.Provider value={{ storeTokenInLS }}>
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