import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth"
const Userdata = () => {
    const {bearerToken}= useAuth();
    const [usersData,setData]=useState([]);
    const user = async()=>{
        try {
            const response = await fetch("http://localhost:3000/api/auth/users",{
                method:"GET",
                headers:{
                    Authorization:bearerToken
                },
               
            })
            const data= await response.json();
            console.log("user",data.userData);
            setData(data.userData)
        }
        
        catch (error) {
            console.log("error from userData",error);
        }
    }
    useEffect(()=>{
        user();
    },[])
  return (
    <div>
        <h1>{usersData.username}</h1>
        <h1>{usersData.email}</h1>
        <h1>{usersData.phone}</h1>
    </div>
  )
}

export default Userdata