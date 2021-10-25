import {Form, Button} from 'react-bootstrap';

export default function Search({input, handleChange, handleSubmit}) {
    
       
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
         <Form onSubmit={handleSubmit} >
           <Form.Group>
           <Form.Label>Word</Form.Label>
           <Form.Control onChange={handleChange} value={input} name="word" type="text"/> 
           </Form.Group>
           <Button variant="primary" type="submit">
            Submit
          </Button>
           
          </Form>  
        </div>
    )
}
