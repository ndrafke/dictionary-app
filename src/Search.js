import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {


const [input, setInput] = useState("");
const [word, setWord] = useState("")
const [results, setResults] = useState([]);


const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

const wordSearch = async () => {
    try{
     const res = await axios.get(url); 
         console.log(res.data);
         setResults([res.data])
        
    }
     catch(err) {
         console.log(err);
     }
     }



useEffect(() =>{
let mounted = true;
wordSearch();
console.log(results)
return() => {
    mounted = false;
  }
}, [word]);



const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value)
}

const handleSubmit = () => {
   
    setWord(input);
}

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
         <div>  
         <input type="text" placeholder="Enter a word" value={input} onChange={handleChange}></input>  
         <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button> 
         </div> 
         <div>
             {results && results.map((data) => {
                <p>{data.word}</p>
             })}
                     
                     
        
         </div>
        </div>
    )
}
export default Search;
