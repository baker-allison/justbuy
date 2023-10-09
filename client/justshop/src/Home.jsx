/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  useLayoutEffect } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { filterItems } from './utils/item';

import Sidebar from './Sidebar';
// import Adsbar from './Adsbar';


// eslint-disable-next-line react/prop-types
const Home = ( {getItems, items }) => {
  
  useLayoutEffect(() =>{
    getItems();
  },  )
  
  

  return (
    <section className="home">
    <Container fluid>
      <Row>
        <Col sm={2}>
        <Row >
       <Sidebar  style={{margin:"20px 0px"}} />
        </Row>
        </Col>
        <Col sm={10} style={{margin:"20px 0px"}} >
        {items.map((item )=> 
        <Row  key={item._id} style={{width: '10rem', display:"inline-flex", height:"14rem", margin:"5px"}}>
           <Col  style={{border:"", borderRadius:""}}      >
      <Card.Img variant="top" style={{width:'8rem', height:"7rem" }}   src={`http://localhost:3000/items/${item.image}`} />
      <Card.Body>
      <span>{item.title}</span>
      <p>
         {item.price}
        </p>
      </Card.Body>
    </Col>
    </Row>
    )}
        </Col>
        {/* <Col sm={2} style={{margin:"20px 0px"}}><Adsbar items={items}  /></Col> */}
      </Row>
    </Container>
        </section>
  )
}

export default Home;