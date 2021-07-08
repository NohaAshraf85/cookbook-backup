import React from "react";
import { SidebarData } from './sidebarData';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "./profileMainNav.css";

function ProfileMainNav() {
    return(
        <Nav className="mt-5">
            {SidebarData.map((item, index) => {
              return (
                    <Nav.Item as="li" className="profile-nav-item" > 
                       <Link to={item.path}> {item.icon}
                      <span >{item.title}</span>
                      </Link>
                    </Nav.Item> 
              );
            })}  
            </Nav>

    )
}

export default ProfileMainNav;
