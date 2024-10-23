
import { useEffect } from 'react';

const AdminUser = () => {
   const token= localStorage.getItem("token")
    const getUserAllData = async ()=>{
        try {
            const response =await fetch("http://localhost:3000/api/admin/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                },
            })
            const data = await response.json();
            console.log("hlo");
        } catch (error) {
            console.log("error from adminUser",error);
        }
    }
    useEffect(()=>{
        getUserAllData();
},[])
  return (
    <div>AdminUser</div>
  )
}

export default AdminUser