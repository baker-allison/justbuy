
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



// eslint-disable-next-line react/prop-types
const Appbar = ({islogin, username}) => {


  return (

    
    <Navbar expand="lg" className="d-flex">
    <Container fluid >
   
      <Navbar.Brand href="/"  className='fs-2'>Buyrite</Navbar.Brand>
      
      <Navbar.Toggle  />
      <Navbar.Collapse >
      
        {islogin ? ( <Nav
          className="me-auto my-2 my-lg-0"
          
        >
       
         <Nav.Link href="/" className='fs-4'>Welcome {username}</Nav.Link>
          <Nav.Link href="/cart" className='fs-4'></Nav.Link>
          <NavDropdown title="Help" id="navbarScrollingDropdown" className='fs-4'>
            <NavDropdown.Item href="orders" className='fs-4'> Cart</NavDropdown.Item>
            <NavDropdown.Item href="cancel" className='fs-4'>
            Add to wishlist
            </NavDropdown.Item>
            <NavDropdown.Item href="return" className='fs-2'>
             Remove from Cart
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5" className='fs-2'>
              
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/" className='fs-4'>Logout</Nav.Link>
          
        </Nav>) : ( <Nav
          className="me-auto my-2 my-lg-0"
          
        >
       
         <Nav.Link href="/" className='d-flex fs-4' >Welcome Guest!</Nav.Link>
          <Nav.Link href="/cart" className='fs-4'>Order</Nav.Link>
          <NavDropdown title="Cart" id="navbarScrollingDropdown" className='fs-4'>
          <NavDropdown.Item href="orders" className='fs-4'> Cart</NavDropdown.Item>
            <NavDropdown.Item href="cancel" className='fs-4'>
            Add to wishlist
            </NavDropdown.Item>
            <NavDropdown.Item href="return" className='fs-2'>
             Remove from Cart
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5" className='fs-2'>
              
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/login" className='fs-4'>Login</Nav.Link>
          
        </Nav>)}
       
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Appbar;