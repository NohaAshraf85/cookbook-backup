import React from "react";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./profileInfo.css";

function ProfileInfo(props) {
    return(
        <>
            <Col xs={12} md={3}>
                <Image className="image-size" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" rounded />
            </Col>
            <Col xs={12} md={4}>
                {/* the name in h3 needs to be dynamic */}
                <h3>{props.user.username}</h3>
                <p>Welcome to your profile</p>  
            </Col>
        </>
    )
}

export default ProfileInfo;
