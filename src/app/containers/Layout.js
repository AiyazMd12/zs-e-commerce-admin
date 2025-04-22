import { useLocation,Outlet } from 'react-router-dom';
import Sidebar from './sideNav';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Layout = () => {
    const location = useLocation();
    // const isAuthenticated = true;
    const UserDetails = useSelector((state) => state.auth);
    console.log(UserDetails,"UserDetails")
    const isAuthenticated = true;
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const hideSidebar = !isAuthenticated || ['/login', '/signup'].includes(location.pathname);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 
  return (
    <div>
        <main style={{ flex: 1, padding: '20px' }}>
        <button onClick={toggleSidebar} style={{ display: hideSidebar ? 'none' : 'block' }}>
          {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
        
      </main>
      {!hideSidebar && (
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      )}
      <Outlet /> {/* Renders the child route's element */}
    </div>
  )
}

export default Layout
