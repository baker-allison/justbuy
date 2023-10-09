/* eslint-disable react/prop-types */



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';






const Search = ({ setSearchQuery}) => {
  

  




 



  return (
    
     <Form className="d-flex w-75" action="/search" method="get"  >
    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
    Search
  </Form.Label>
  <Form.Control
    size="lg"
    id="inlineFormInput"
    placeholder="Search items"
    onChange = {e => setSearchQuery(e.target.value)}
    type="text"
    name="q"
  />
  <Button type="submit"  variant="outline-warning" size="lg" 
  className="m-2"
  >
    Search
  </Button>
   
</Form>
   
  )
}

export default Search;