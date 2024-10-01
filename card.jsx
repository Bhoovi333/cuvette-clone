import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <>
    <Card style={{ width: '18rem',alignContent:'center', backgroundColor:"#E1EBEE",margin:"10px"}} className="d-inline-flex p-2">
      <Card.Img  style={{ height: '13rem',alignContent:'center', justifyContent:'space-evenly'}}src={props.imgsrc} />
      <Card.Body>
        <Card.Title style={{ color:"black"}}><b>{props.title}</b><br></br><h6>{props.author}</h6></Card.Title>
        <Button style={{ backgroundColor:"blue",border:"1px solid blue",borderRadius: " 20px 20px 20px 20px ",
   }} variant="primary">{props.button}</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default BasicExample;