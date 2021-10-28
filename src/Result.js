import React from 'react'
import {Card} from 'react-bootstrap';


export default function Result({result}) {

    const definitionStyles = {
        listStyle: "none"
        
    }

    const listStyles = {
        listStyle: "square inside",
        fontSize: "1.1rem",
        marginLeft: "2.8rem"
    }

    const partOfSpeechStyles = {
        fontSize: "0.9rem", 
        fontStyle: "italic",
        fontFamily: "georgia",
        marginLeft: "2.8rem"
    }
    const subStyles = {
        fontSize: "0.9rem", 
        fontFamily: "american typewriter", 
        fontStyle: "italic"
    }
    const exampleStyles = {
        fontSize: "0.9rem",
        fontFamily: "american typewriter" ,
        fontStyle: "italic"
        
    }
    const prefixStyles = {
        fontStyle: "normal"
    }
    

    return (
    <Card className="m-2" style={{maxWidth: "90vw", minWidth: "50vw"}}>
        <Card.Body style={{backgroundColor: "hsla(31, 57%, 95%, 1)"}}>
        <div className="d-flex flex-column justify-content-between">
        <Card.Header border="secondary" className="d-flex align-items-center p-1 m-2" style={{backgroundColor: "hsla(31, 57%, 85%, 1)", bordreRadius: "5%"}} >
            <h2 style={{marginLeft: "1.8rem"}}>{result.word}</h2>
            
            <h6 style={{marginLeft: "0.8rem"}} >[{result.pronunciation.all}]</h6>
        </Card.Header>
        {result.results.filter((info, index) => index < 8).map((info, index) => {
            return (
                <ul key={index} id="result-list">
               
        <Card.Text className="m-2 d-flex flex-column justify-content-center" style={{backgroundColor: "white", padding: "1.5rem 2.5rem 1.5rem 2.5rem", borderRadius: "1000px", minWidth: "50vw"}}>
       <li style={definitionStyles}>
           <span style={partOfSpeechStyles}>({info.partOfSpeech}):</span></li>
           <li style={definitionStyles}>{info.definition}</li>
           {info.examples ? <li style={listStyles}><span style={exampleStyles}>
            <span style={prefixStyles}>i.e:   </span>   "{info.examples.join('",   "')}"</span></li> :  ""}
           {info.synonyms ? <li style={listStyles}><span style={subStyles}>
           <span style={prefixStyles}>Synonyms: </span>   {info.synonyms.join(",  ")}</span></li> : ""}
           {info.similarTo ? <li style={listStyles}><span style={subStyles}><span style={prefixStyles}>Similar to:   </span>   {info.similarTo.join(",  ")}</span></li> : ""} 
        </Card.Text>
        </ul>
            )
})}
   
               
        </div>  
        </Card.Body>
           
        </Card>
    )
}
