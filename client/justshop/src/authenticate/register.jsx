/* eslint-disable react/prop-types */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"






const Register = ({signup, updateUser} ) => {
  const navigate = useNavigate()
    
 
   const  handleChange = (e) => {
      updateUser(e);
    }
  
  
  
    const handleSubmit = () => {
      
    // const config = {
    //     method:"post",
    //     url:"http://localhost:3000/register",
    //     data:{
    //     username,
    //     email, 
    //     password,
    //     },
    // }
    // axios(config)
    //   .then((result) => {
    //     setRegister(true);
    //        console.log(result)
    //     alert("Successfully registered!")
    //   })
    //   .catch((error) => {
    //     alert(error.message)
        signup();
        navigate("/")

    //   });
    }


  return (
    <section>
<Container>
 
<Row   style={{ margin:"50px 20px 50px 0px"}}>
<center>
<Col lg={4} style={{ padding:"50px 10px 10px 10px", border:"solid black 1px", borderRadius:"10px"}} >
<center><img
                src="https://media.tenor.com/uZWZMDLUwSYAAAAM/girl-shopping.gif" alt="" height="100"
                /></center>
                <hr />
  <h4 style={{textAlign:"center"}}>Create a account</h4>
  
  <Form.Control onChange={handleChange}  name="username"  size="md" type="text" placeholder="Username" />
      <br />
      <Form.Control onChange={handleChange} name="email"  size="md" type="email" placeholder="Email" />
      <br />
      <Form.Control onChange={handleChange} name="password" size="md" type="password" placeholder="Password" />
      <center> <button   onClick={e =>handleSubmit(e) }  className="btn btn-outline-warning" style={{backgroundColor:"azure", color:"black", marginTop:"10px"}} >Sign up</button></center>
      <p>Already registered?  <a href="/login" style={{color:'red', textDecoration:'none'}}>Sign in</a></p>
       <center ><p style={{color:'red', textDecoration:'none'}}>Not yet Logged in</p></center> 
</Col>
</center>
</Row>
</Container>
    </section>
  )
}

export default Register;