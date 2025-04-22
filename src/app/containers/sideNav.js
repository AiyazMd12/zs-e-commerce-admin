import { NavLink } from 'react-router-dom';
const SideNav = ({ isOpen, toggleSidebar }) => {
    return (
        <aside
          style={{
            width: isOpen ? '200px' : '0',
            overflow: 'hidden',
            transition: 'width 0.3s',
            background: '#f4f4f4',
            padding: isOpen ? '20px' : '0',
          }}
        >
          <h2>ZS Admin Panel</h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      );
}

export default SideNav
