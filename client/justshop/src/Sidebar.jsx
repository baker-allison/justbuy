
import Stack from 'react-bootstrap/Stack';
import {
  
  Link,
} from "react-router-dom";


const Sidebar = () => {


  return (
  
    <Stack gap={2}   >
    <Link to="/category/Supermarket"  className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon type='solid' name='shopping-bag'></box-icon></span>Supermarket</Link>
    <Link to="/category/Phone & Tablets" className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon type='solid' name='devices'></box-icon></span>Mobile</Link>
    <Link to="/category/Health & Beauty" className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon   name='health'></box-icon></span>Health</Link>
    {/* <Link to="/category/Home & office"  className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon type='home' name='briefcase-alt'></box-icon></span>Home & Office</Link> */}
    <Link to="/category/Appliances"  className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon type='solid' name='castle'></box-icon></span>Appliances</Link>
    <Link to="/category/Computing" className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon  name='laptop'></box-icon></span>Computing</Link>
    <Link to="/category/Electronics" className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon type='solid' name='megaphone'></box-icon></span>Electronics</Link>
    <Link to="/category/Fashion" className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon  name='male-female'></box-icon></span>Fashion</Link>
    <Link to="/category/Gaming" className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon type='solid' name='medal'></box-icon></span>Gaming</Link>
    {/* <Link to="/category/sportinggoods" className="p-2 text-decoration-none text-reset"><span className="p-2"><box-icon type='solid' name='basketball'></box-icon></span>Sporting Goods</Link> */}
  </Stack>
  )
}

export default Sidebar