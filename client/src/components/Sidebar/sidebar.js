// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './sidebarData';
// import "./sidebar.css";


// function Sidebar({pageName}) {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
     
//         <nav className={ 'nav-menu active'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
          
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={`${item.cName} ${pageName === item.title?"sidebarSelected":""}`}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
      
//     </>
//   );
// }

// export default Sidebar;