import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {


const [input, setInput] = useState("");
const [word, setWord] = useState("")
const [search, setSearch] = useState([]);



/*
const options = {
    method: 'GET',
    url: `https://localhost:5000/${word}`,
    headers: {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': '47b41b8d27mshbe69129491e3e82p1feba9jsnc57a7f91450a'
    }
};
*/
const url = `http://localhost:5000/words/${word}`;


useEffect(() =>{
    
const wordSearch = async () => {
    
    await axios.get(url)
    .then(res => {
       
           setSearch([res.data])
           console.log(search)
       }
    )
   
      .catch(error => {
          console.log(error);
        
      }) 
        
     }

wordSearch();
console.log(search);


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
         {search && search.map(words => {
            <p>{words.word}</p> 
         })}
         </div>
         
         
         
         
         
         
             
            
                    
                     
        
         
        </div>
    )
}
export default Search;
