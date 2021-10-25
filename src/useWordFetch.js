import {useReducer, useEffect} from 'react';
import axios from 'axios';

const ACTIONS = {
    GET: "GET",
    GET_DATA: "get-data",
    ERROR: "error"
}

const BASE_URL = `https://wordsapiv1.p.rapidapi.com/words/`

const OPTIONS = {
    method: 'GET',
    url: BASE_URL,
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': '47b41b8d27mshbe69129491e3e82p1feba9jsnc57a7f91450a'
    }
  };

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.GET:
            return {loading: true, results: []};
            
        case ACTIONS.GET_DATA:
        return {...state, loading: false, results: action.payload.results};
        
        case ACTIONS.ERROR:
        return {...state, loading: false, error: action.payload.error, results: []};
        
        
        default: return state
    }
}

export default function useWordFetch(word){
const [state, dispatch] = useReducer(reducer, {results: [], loading: true})

const BASE_URL = `https://wordsapiv1.p.rapidapi.com/words/${word}`

const OPTIONS = {
    method: 'GET',
    url: BASE_URL,
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': '47b41b8d27mshbe69129491e3e82p1feba9jsnc57a7f91450a'
    }
  };

useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({type: ACTIONS.GET});
    axios.request(OPTIONS, {
        cancelToken: cancelToken1.token,
        word: {word: word} 
    }).then(res => {
        dispatch({type: ACTIONS.GET_DATA, payload: {results: [res.data]}})
        
    }).catch(err => {
        if(axios.isCancel(err)) return
        dispatch({type: ACTIONS.ERROR, payload: {error: err}})
    })

    
    return() => {
        cancelToken1.cancel()
        
    }
}, [word])


    return state
}