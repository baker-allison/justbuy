/* eslint-disable no-unused-vars */
import { redirect } from 'react-router-dom';
import  { useState, useEffect } from 'react'
import Appbar from "./Navbar"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './index.css'
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from "react-toastify";
import Edit from './Edit';

import {
  createBrowserRouter,
  RouterProvider,
  useParams, 
} from "react-router-dom";
import "./index.css";




import { useCookies } from "react-cookie";


import Dashboard from "./Dashboard.jsx";
import Home from "./Home.jsx";
import ErrorPage from "./Error.jsx";
import Additem from './Additem.jsx';
import SearchResults from "./searchResults"
import Search from './Search';
import Category from './Category';
import Protected from './protected';

import Logout from "./authenticate/Logout.jsx";
import Login from "./authenticate/login.jsx";
import Register from "./authenticate/register.jsx";








const App = () => {
  

  const [state, setState] =   useState({
    username:"",
    email: '',
    password: ''
  });
  const [isloggedin, setIsLoggedin] = useState(false)
  const [register, setRegister] = useState(false)
  const [items, setItems] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');

   const [cookies, removeCookie] = useCookies([]);
   const [username, setUsername] = useState("");
  
  const updateUser = (e) => {
     setState({ ...state,
      [e.target.name]: e.target.value});
   }


 


  const getItems = () => {
    const config ={
      method:"get",
      url:"http://localhost:3000/items",
    }
    
    axios(config)
    .then(response=>{
    setItems(response.data)
    })
    .catch(error => {
      alert(error)
    })
    
  }

  

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        redirect("/login");
      }
      const { data } = await axios.post(
        "http://localhost:3000",
        
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), redirect("/login"));
    };
    verifyCookie();
  }, [cookies,  removeCookie]);
  const Logout = () => {
    removeCookie("token");
    redirect("/signup");
  };
   

  const signin = () => {
    const {username,  password} = state
    const config = ({
      method:"post",
      url:"http://localhost:3000/login",
      data:{
          username,
          password,
       },
      })
      axios(config)
     .then( result => {
       setIsLoggedin(true)
       console.log(result)
    alert("Login successful!");
     
      })
      .catch((error) => {
        console.log(error)
       alert("Failed!")
       
     });
     
  }
  
  const signup = () => {
    const {username, email, password} = state
    const config = {
      method:"post",
      url:"http://localhost:3000/register",
      data:{
      username,
      email, 
      password,
      },
  }
  axios(config)
    .then((result) => {
      setRegister(true);
         console.log(result)
      alert("Succes!!")
      
    })
    .catch((error) => {
      console.log(error)
      alert("Failed!")
    });
  }
  
  
  const signout = () => {
    axios.post('/logout').then(response => {
      if (response.status === 200) {
        setIsLoggedin(false)
        setState({
          username: null,
          password: null
        })
        
      }
    }).catch(error => {
      console.log('logout error', error);
      alert("Logged out!")
    });
  
  }
  
 
   const router = createBrowserRouter([
    {
      path: "/",
      element: <Home getItems={getItems}  items={items}   />,
      errorElement: <ErrorPage />
    },
    {
      path: "dashboard",
      element: <Dashboard  /> ,
      errorElement: <ErrorPage />
    },
    
    {
      path: "register",
      element: <Register signup={signup}   register={register} updateUser={updateUser}  />,
      errorElement: <ErrorPage />
    },
    {
      path: "login",
    element: <Login islogin={isloggedin} signin={signin} updateUser={updateUser} />,
      errorElement: <ErrorPage  />
    },
  
     
     {
       path: "logout",
       element: <Logout />,
      errorElement: <ErrorPage />
     },
  
     {
      path: "additem",
      element: <Additem />,
     errorElement: <ErrorPage />
    },
    {
      path: "search",
      element: <SearchResults items={items} searchQuery={searchQuery} getItems={getItems}  />,
     errorElement: <ErrorPage />
    },
    {
      path: "/category/:id",
      element: <Category items={items} getItems={getItems}   />,
     errorElement: <ErrorPage />
    },
    {
      path: "/edit/:id",
      element: <Category items={items} getItems={getItems}   />,
     errorElement: <ErrorPage />
    },
  ]);
  

  
  return (
    
    <section>
      <Container fluid>
      <Row style={{ margin:"10px 0px 10px 0px"}}>
      <Appbar islogin={isloggedin} username={username}   />
      <center>
      <Search setSearchQuery={setSearchQuery} />
      </center>
            
      <RouterProvider router={router} />
      </Row>
      </Container>
      </section>
  )
}

export default App