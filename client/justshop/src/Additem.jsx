import { useState } from "react";
import axios from "axios";
 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Additem = () => {
  
   const [state, setState] = useState({
     title:"",
     description:"",
       image:"",
    category:"",
     price:""
    
    
   })

 const handleChange = (e) => {
e.preventDefault();
setState({...state, [e.target.name] : e.target.value})
 }

 const handlePhoto = (e) => {
  setState({...state, image : e.target.files[0]})
 }


   const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData;
    formData.append("title", state.title)
    formData.append("description", state.description)
    formData.append("image", state.image)
    formData.append("category", state.category)
    formData.append("price", state.price)

    console.log(state.image)
    axios.post("http://localhost:3000/items", formData)
    .then(res => {
      console.log(res)
      alert("Success!")
    })
    .catch(err =>{
      console.log(err)
      alert("Failed")
    })
   }

  return (
    <section>
    <Container>
    <Row   style={{margin:"50px 20px 50px 0px"}}>
    <center>
    <Col  style={{ padding:"50px 10px 10px 10px", border:"solid black 1px", borderRadius:"10px"}} >
    
      <h4 style={{textAlign:"center"}}>Add item</h4>
      <Row>
      <Row>
      <Col style={{padding:"0px 0px 20px 20px"}}>
       
          <Form.Control size="md" type="text" placeholder="Name"  onChange={handleChange}  name="title"  />
          </Col>
          <Col>
          
          <Form.Control size="md" type="text" placeholder="Category" name="category" onChange={handleChange}   />
          </Col>
          </Row>
          
          <Row style={{padding:"0px 0px 20px 20px"}} >
          <Col>
  
          <Form.Control size="md" type="file" id="myFile" name="image" placeholder="Image" onChange={handlePhoto} encType ="multipart/form-data" accept=".png, .jpg, .jpeg"   />
          </Col>
          <Col>
          
          <Form.Control size="md" type="text" placeholder="Price"   name="price" onChange={handleChange}  />
          </Col>
          </Row>
          <br />
          <Col>
          
          <Form.Control size="md" type="text" placeholder="Description" onChange={handleChange} name="description"    />
          </Col>
          </Row>
        
         <Col> <button  onClick={handleSubmit} encType ="multipart/form-data"  className="btn btn-outline-warning" style={{backgroundColor:"azure", color:"black", margin:"10px"}} >Add item</button>
           <button  onClick={handleEdit}  encType ="multipart/form-data"  className="btn btn-outline-warning" style={{backgroundColor:"azure", color:"black", margin:"10px"}} >Edit item</button>
          <button  encType ="multipart/form-data"  className="btn btn-outline-warning" style={{backgroundColor:"azure", color:"black", margin:"10px"}} >Delete item</button></Col>
    </Col>
    </center>
    </Row>
    </Container>
        </section>
  )
}

export default Additem