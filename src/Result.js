import React from 'react'
import {Card} from 'react-bootstrap';


export default function Result({result}) {

    const definitionStyles = {
        listStyle: "none",
        fontFamily: "georgia"
    }

    const listStyles = {
        listStyle: "none", 
        fontFamily: "georgia",
        fontSize: "1.1rem",
        marginLeft: "3.8rem" 
    }

    const partOfSpeechStyles = {
        fontSize: "0.9rem", 
        fontStyle: "italic"
    }
    const subStyles = {
        fontSize: "0.9rem", 
        fontFamily: "georgia",
        fontStyle: "italic"
    }
    const exampleStyles = {
        fontSize: "0.9rem", 
        fontFamily: "georgia"
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
               
        <Card.Text className="m-2 d-flex flex-column justify-content-center" style={{backgroundColor: "white", padding: "2rem", borderRadius: "1000px"}}>
       <li style={definitionStyles}>
           <span style={partOfSpeechStyles}>({info.partOfSpeech})</span>: {info.definition}</li>
           {info.examples ? <li style={listStyles}><span style={exampleStyles}>i.e: "{info.examples.join(",  '' ")}"</span></li> :  ""}
           {info.synonyms ? <li style={listStyles}><span style={subStyles}>
           Synonyms: {info.synonyms.join(",  ")}</span></li> : ""}
           {info.similarTo ? <li style={listStyles}><span style={subStyles}>Similar to: {info.similarTo.join(",  ")}</span></li> : ""} 
        </Card.Text>
        </ul>
            )
})}
   
               
        </div>  
        </Card.Body>
           
        </Card>
    )
}
