import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [service, setService] = useState();
    const isLoggedIn = !!token;
    const bearerToken=`Bearer ${token}` ;
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const userAuthentication = async () => {
        if (!token) return; 
        try {
            const response = await fetch("http://localhost:3000/api/auth/users", {
                method: "GET",
                headers: { Authorization:bearerToken },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const servicesDataFetch = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/services/service", {
                method: "GET"
            });
            if (response.ok) {
                const data = await response.json();
                //console.log(data.msg);
                setService(data.msg);
            }
        } catch (error) {
            console.log("services server error", error);
        }
    };

    useEffect(() => {
        if (token) {
            userAuthentication();
            servicesDataFetch();
        }
    }, [token]);

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, service,bearerToken }}>
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
