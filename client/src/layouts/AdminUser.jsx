
import { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import './AdminUser.css';
const AdminUser = () => {
    const {bearerToken}= useAuth();
    const [userData,setData]=useState([])
   //const token= localStorage.getItem("token")
    const getUserAllData = async ()=>{
        try {
            const response =await fetch("http://localhost:3000/api/admin/user",{
                method:"GET",
                headers:{
                    Authorization:bearerToken
                },
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
  

            const data = await response.json();
            
            console.log(Array.isArray(data)); // Should log true if it's an array
            console.log("user",data.msg);
            setData(data.msg)
        } catch (error) {
            console.log("error from adminUser",error);
        }
    }
    useEffect(()=>{
        getUserAllData();
},[])
return (
    <>
    <h1 className="admin-header">Admin User Data</h1>
    <div className="table-container">
        <table className="user-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((curUser, index) => (
                    <tr key={index}>
                        <td>{curUser.username}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.phone}</td>
                        <td><button className="edit-btn">Edit</button></td>
                        <td><button className="delete-btn">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</>
);

}
1
export default AdminUser