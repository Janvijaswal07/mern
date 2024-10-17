import { useState } from 'react';
import './ContactPage.css';
import { useAuth } from '../../store/auth';
const ContactPage = () => {
  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: '',
  });
const {user}=useAuth();
const handleSubmit = async(e)=>{
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/api/contactus/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(contact)
    })
  if(response.ok){
    setContact({
      username: '',
      email: '',
      message: '',
    })
    alert("done")
  }
  } catch (error) {
    console.log(error);
  }
}
const [userData,setData]=useState(true);
if(userData&&user){
  setContact({
    username: user.username,
    email: user.email
  });
  setData(false);
}
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  


  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={contact.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="message"
    value={contact.message}
    onChange={handleChange}
  />
</div>


        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
