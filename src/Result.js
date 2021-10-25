import React from 'react'
import {Card} from 'react-bootstrap';


export default function Result({result}) {
    return (
    <Card>
        <Card.Body>
        <div className="d-flex justify-content-between">
        
        {result.results.map((info, index) => {
            return (
                <div key={index}>
                <Card.Title>
            <h1>{result.word}</h1>
        </Card.Title>
                <Card.Text >
       <p>{info.definition}</p> 
       <p>{info.partOfSpeech}</p>
        </Card.Text>
        </div>
            )
})}
               
        </div>  
        </Card.Body>
           
        </Card>
    )
}
