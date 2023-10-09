/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  useLayoutEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Sidebar from './Sidebar';
import Adsbar from './Adsbar';


const SearchResults = ({searchQuery}) => {
  const [items, setItems] = useState([])
 
  const handleSearch = () => {
  

  const config ={
    method:"get",
    url:`http://localhost:3000/search?q=${searchQuery}`,
  }

  
  axios(config)
  .then(response=>{
  setItems(response.data)
  })
  .catch(error => {
    alert(error)
  })
  
  }
  useLayoutEffect(() =>{
handleSearch();
  }, )

        

  return (
    <section className="home">
    <Container fluid>
      <Row>
        <Col sm={2}>
        <Row >
       <Sidebar  style={{margin:"20px 0px"}} />
        </Row>
        </Col>
        <Col sm={8} style={{margin:"20px 0px"}} >
        {items.map((item )=> 
        <Row  key={item._id} style={{width: '9.5rem', display:"inline-flex", height:"14rem", margin:"5px"}}>
           <Col  style={{}}      >
      <Card.Img variant="top" style={{width:'8rem', height:"7rem" }}   src={`http://localhost:3000/search/${item.image}`} />
      <Card.Body>
      <h6>{item.title}</h6>
      <h6>
         {item.price}
        </h6>
      </Card.Body>
    </Col>
    </Row>
    )}
        </Col>
        <Col sm={2} style={{margin:"20px 0px"}}><Adsbar items={items}  /></Col>
      </Row>
    </Container>
        </section>
  )
}

export default SearchResults;