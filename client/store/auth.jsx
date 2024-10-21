/* eslint-disable react/prop-types */
import { createContext, useContext,useEffect,useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token ,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const [service,setService]=useState();
    let isLoggedIn=!! token;
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)
        localStorage.setItem("token", serverToken);
    };
    const userAuthentication= async()=>{
        try {
            const response = await fetch("http://localhost:3000/api/auth/users",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                },
               
            })
            if(response.ok){
                const data= await response.json();
                // console.log(data.userData);
                setUser(data.userData)
            }
        } catch (error) { 
            console.log(error);
        }
    }
    const servicesDataFetch= async()=>{
        try {
            const response = await fetch("http://localhost:3000/api/services/service",{
                method:"GEt"
            })
            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setService(data.msg);

            }
        } catch (error) {
            console.log("services server error",error);
        }
    }
    useEffect(()=>{
        userAuthentication();
        servicesDataFetch();
    },[])
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ storeTokenInLS,LogoutUser,isLoggedIn ,user,service}}>
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