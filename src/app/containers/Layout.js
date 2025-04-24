import { useLocation,Outlet } from 'react-router-dom';
import Sidebar from './sideNav';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TopMenu from "./TopMenu"
const Layout = () => {
    const location = useLocation();
    const auth = useSelector((state)=>state?.auth)
    console.log(auth,"auth")
    const isAuthenticated = auth?.isAuthenticated;
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const hideSidebar = !isAuthenticated || ['/login', '/signup'].includes(location.pathname);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 
  return (
    <div>
      {/* <TopMenu /> */}
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
