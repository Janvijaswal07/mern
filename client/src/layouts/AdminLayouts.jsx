import { NavLink, Outlet } from 'react-router-dom';
import './AdminLayouts.css'; // Import the CSS file

const AdminLayouts = () => {
  return (
    <>
      <nav>
        <li>
          <NavLink 
            to='/admin/users' 
            activeClassName="active" 
            exact
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/admin/contacts' 
            activeClassName="active" 
            exact
          >
            Contacts
          </NavLink>
        </li>
      </nav>
      <Outlet/>
    </>
  );
}

export default AdminLayouts;
