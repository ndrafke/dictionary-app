import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function Search({input, handleChange, handleSubmit}) {
    
       
    return (
        
         <Form onSubmit={handleSubmit} >
           <div className="d-flex flex-column align-items-center">
           
           <Form.Control className="m-2" onChange={handleChange} value={input} name="word" type="text" placeholder="Enter A Word" /> 
           
           <Button variant="primary" type="submit">
            Search
          </Button>
           </div>
          </Form>  
        
    )
}
