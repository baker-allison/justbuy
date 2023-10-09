/* eslint-disable react/prop-types */

 
 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import Form from 'react-bootstrap/Form';
 import {useNavigate} from "react-router-dom"

 
 
 


 const Login = ({ signin, updateUser }) => {
    const navigate = useNavigate()
    // const [username, setUserName] = useState("")
    // const [password, setPassword] = useState("") 
    //  const [islogin, setIsLogin] = useState(false)

    const handleChange = (e) => {
      e.preventDefault();
      updateUser( e);
    }
  
    const handleSubmit = (e)  => {
     e.preventDefault();
  //    const config = ({
  //    method:"post",
  //    url:"http://localhost:3000/login",
  //    data:{
  //        username,
  //        password,
  //     },
  //    })
  //    axios(config)
  //   .then( result => {
  //     setIsLogin(true)
  //     console.log(result)
  //  alert("Login successful")
  //     navigate('/dashboard')
  //    })
  //    .catch((error) => {
  //     alert(error.message)
      
  //   });
    signin();
    navigate("/")

  }

   return (
     <section>
 <Container>
 <Row   style={{margin:"50px 20px 50px 0px"}}>
 <center>
 <Col lg={4} style={{ padding:"50px 10px 10px 10px", border:"solid black 1px", borderRadius:"10px"}} >
 <center><img
                src="https://media.tenor.com/uZWZMDLUwSYAAAAM/girl-shopping.gif" alt="" height="100"
                /></center>
                 <hr />
   <h4 style={{textAlign:"center"}}>Login</h4>
       <Form.Control size="md" type="text" placeholder="username"    onChange={handleChange } />
       <br />
       <Form.Control size="md" type="password" placeholder="Password" onChange={handleChange}  />
       <center> <button   onClick={e =>handleSubmit(e) }  className="btn btn-outline-warning" style={{backgroundColor:"azure", color:"black", marginTop:"10px"}} >Sign in</button></center>
       <p>Dont have an account?  <a href="/register" style={{color:'red', textDecoration:'none'}}>Register</a></p>
        <center ><p style={{color:'red', textDecoration:'none'}}>Not yet Logged in</p></center> 
     
 </Col>
 </center>
 </Row>
 </Container>
     </section>
  )
 }

 export default Login;



