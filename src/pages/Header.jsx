import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div >
   <Navbar style={{backgroundColor:"#E2DFE7"}} >
        <Container >
          <Link to="/home" style={{textDecoration:"none",fontWeight:"bolder",fontFamily:"cursive"}} >
            <Navbar.Brand style={{marginLeft:"-90px",color:"#BAA0C7"}} >
              <img
                alt=""
                src="https://www.freepnglogos.com/uploads/camera-logo-png/camera-outline-icon-27.png"
                width="50"
                height="40"
                className="d-inline-block align-center me-2"
              />
             Chroma
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
   
      
    </div>
  )
}

export default Header