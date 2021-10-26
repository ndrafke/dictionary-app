import React, {useState} from 'react'
import useWordFetch from './useWordFetch';
import {Container} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Search from './Search';
import Result from './Result';


function App() {
const [input, setInput] = useState("");  
const [word, setWord] = useState("dictionary");



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
    <Container className="bg-light mt-3 p-2">
      <h1 style={{textAlign: "center"}}>Dictionary</h1>
      <div className="m-2">
      <Search word={word} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div className="m-2">
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
