
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink } from "react-router-dom"


function Navi() {
  return (
    <>
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mx-auto'></div>
      </div>
    </div>
      <Navbar bg="light" data-bs-theme="light">
        <Container style={{paddingBottom:"20px"}} >
       
        <img src="https://cuvette.tech/app/static/media/logo.74bda650.svg" height="40px" width="150px"></img>
         <Nav>
          <NavLink exact to="/"  style={{color:"black",margin:"5px",textDecoration:"none" }}>Home</NavLink>
          <NavLink exact to="/internship"  style={{color:"black",margin:"5px",textDecoration:"none"}}>Internship</NavLink>
         
        
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default Navi;