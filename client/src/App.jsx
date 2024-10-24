import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import About from './pages/About';
import Navbar from './components/Navbar';
import AdminUser from './layouts/AdminUser';
import AdminLayouts from './layouts/AdminLayouts';
import AdminContact from './layouts/AdminContact';
import Userdata from './pages/Userdata';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} /> 
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/userdata' element={<Userdata />} />
          <Route path='/admin' element={<AdminLayouts/>}>
          <Route path='users' element={<AdminUser/>}/>
          <Route path='contacts' element={<AdminContact/>}/>
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
