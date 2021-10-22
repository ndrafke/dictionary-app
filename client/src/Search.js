import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {


const [input, setInput] = useState("");
const [word, setWord] = useState()
const [search, setSearch] = useState([]);




const options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
    headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': '47b41b8d27mshbe69129491e3e82p1feba9jsnc57a7f91450a'
    }
};

//const url = `/https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;


useEffect(() =>{
    
const wordSearch = async () => {
        
        try{
        const res = await axios.request(options);
        
        console.log(res)
        setSearch([res] || [])
        console.log(search)
        }
        catch(err){
            console.log(err)
        }
        
     }

wordSearch();
setInput("");
console.log(search);
return() => setSearch(search);

}, [word]);



const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    setWord(input);
    
    console.log(word)
}

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
         <div>
         <form onSubmit={handleSubmit}>     
         <input type="text" placeholder="Enter a word" value={input} onChange={handleChange}></input>  
         <button className="btn btn-primary" type="submit">Submit</button> 
         </form>
         </div> 
         <div>
             
         {search.length < 1 ? <p></p> :
             <div>
            <p>{search[0].data.word}</p> 
            {search[0].data.results.map(info => {
                <ul>
                <li>{info.definition}</li>
                <li>{info.partOfSpeech}</li>
                </ul>
              
            })}
            </div>
         }
         </div>
         
         
         
         
         
         
             
            
                    
                     
        
         
        </div>
    )
}
export default Search;
