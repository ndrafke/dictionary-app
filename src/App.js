import React, {useState} from 'react'
import useWordFetch from './useWordFetch';
import {Container} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Search from './Search';
import Result from './Result';



function App() {
//useState to hold state of word Search : 
const [input, setInput] = useState("");  
const [word, setWord] = useState("dictionary");


//variables from useWordFetch hook imported as props:
const {results, loading, error} = useWordFetch(word);

const handleChange = (e) => {
  e.preventDefault();
  const value = e.target.value;
  setInput(value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  setWord(input)
  console.log(word);
}

console.log(results)

  return (
    <Container className="bg-light mt-3 p-2" style={{width: "95vw", border: "2px solid black"}}>
      <h1 style={{textAlign: "center", fontFamily: "Georgia"}}>Dictionary</h1>
      <div className="m-2">
      <Search word={word} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div className="m-2 d-flex flex-column align-items-center">
      {loading && 
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner>}
      {error && <h6>No results... Try a new search</h6>}
      {results.map(result => {
        return <Result key={result} result={result} />
      })}
     </div>
     
    </Container>
  )
}

export default App;
