import React from 'react'
import {Card} from 'react-bootstrap';


export default function Result({result}) {



    return (
    <Card  className="m-2" style={{maxWidth: "90vw", minWidth: "50vw"}}>
        <Card.Body>
        <div className="d-flex flex-column justify-content-between">
        <Card.Header border="secondary" className="d-flex align-items-center p-1"  >
            <h2 style={{marginLeft: "1.8rem"}}>{result.word}</h2>
            
            <h6 style={{marginLeft: "0.8rem"}} >[{result.pronunciation.all}]</h6>
        </Card.Header>
        {result.results.filter((info, index) => index < 8).sort((a, b) => a.partOfSpeech > b.partOfSpeech ? 1 : -1).map((info, index) => {
            return (
                <ul key={index} id="result-list">
               
                <Card.Text className="m-2">
       <li style={{listStyle: "none", fontFamily: "lucinda console"}}>
           <span style={{fontSize: "0.9rem", fontStyle: "italic"}}>({info.partOfSpeech})</span>: {info.definition}</li>
    
        </Card.Text>
        </ul>
            )
})}
   
               
        </div>  
        </Card.Body>
           
        </Card>
    )
}
