import {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search';

export default function WordFetch() {

const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [results, setResults] = useState([]);
const {word} = Search();

//const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

const options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
    headers: {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': '47b41b8d27mshbe69129491e3e82p1feba9jsnc57a7f91450a'
    }
};

useEffect(() =>{
  console.log(word)  
const wordSearch = async () => {
    setLoading(true)
    await axios.request(options)
    .then(res => {
           
    setResults([res])
    console.log(results)
    })
    .catch(err => {
    setError(true)
    console.log(err);
     }) 
    }
    wordSearch();
    console.log(results);
    setLoading(false);
    
    
    }, [word]);

    return  {results: results, loading: loading, error: error}
       
    
}
