import {useReducer, useEffect} from 'react';
import axios from 'axios';

//constants for API actions:
const ACTIONS = {
    GET: "GET",
    GET_DATA: "get-data",
    ERROR: "error"
}

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
//useReducer for state management:    
const [state, dispatch] = useReducer(reducer, {results: [], loading: true})

//API endpoints and credentials:
const BASE_URL = `https://wordsapiv1.p.rapidapi.com/words/${word}`

const OPTIONS = {
    method: 'GET',
    url: BASE_URL,
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
  };

// WordsAPI called with useEffect when word variable changes in search:
useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({type: ACTIONS.GET});
    axios.request(OPTIONS, {
        cancelToken: cancelToken1.token,
        word: {word} 
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