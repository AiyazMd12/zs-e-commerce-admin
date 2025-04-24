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
                <NavLink to="/bannerupload">Banner Upload</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products Upload</NavLink>
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


// import { NavLink } from 'react-router-dom';

// const SideNav = () => {
//     return (
//         <header
//           style={{
//             background: '#f4f4f4',
//             padding: '15px 20px',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//             position: 'sticky',
//             top: 0,
//             zIndex: 1000,
//           }}
//         >
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
//             <h2 style={{ margin: 0, fontSize: '1.5rem' }}>ZS Admin Panel</h2>
//             <nav>
//               <ul style={{ 
//                 display: 'flex', 
//                 listStyle: 'none', 
//                 margin: 0, 
//                 padding: 0,
//                 gap: '20px'
//               }}>
//                 <li>
//                   <NavLink 
//                     to="/bannerupload"
//                     style={({ isActive }) => ({
//                       textDecoration: 'none',
//                       color: isActive ? '#007bff' : '#333',
//                       fontWeight: isActive ? 'bold' : 'normal',
//                       padding: '5px 10px'
//                     })}
//                   >
//                     Banner Upload
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink 
//                     to="/products"
//                     style={({ isActive }) => ({
//                       textDecoration: 'none',
//                       color: isActive ? '#007bff' : '#333',
//                       fontWeight: isActive ? 'bold' : 'normal',
//                       padding: '5px 10px'
//                     })}
//                   >
//                     Products Upload
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink 
//                     to="/orders"
//                     style={({ isActive }) => ({
//                       textDecoration: 'none',
//                       color: isActive ? '#007bff' : '#333',
//                       fontWeight: isActive ? 'bold' : 'normal',
//                       padding: '5px 10px'
//                     })}
//                   >
//                     Orders
//                   </NavLink>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </header>
//       );
// }

// export default SideNav;