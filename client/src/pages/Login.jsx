import  { useState } from 'react';
import './LoginPage.css';
import { useAuth } from '../../store/auth';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const storeTokenInLS=useAuth();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// const naviagte = useNavigation();
  const handleSubmit =async (e) => {
    e.preventDefault();
    
   try {
    const response= await fetch('http://localhost:3000/api/auth/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    if(response.ok){
      const res_data = await response.json();
      console.log("response from server",res_data);
      storeTokenInLS(res_data.token)
      alert("Login successful")
      setFormData({email:"",password:""});
      // naviagte('/')
    }
    else{
      alert("invalid credentail")
      console.log("invalid credentail");
    }
    console.log(response);
   } catch (error) {
    console.log("login",error);
   }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
