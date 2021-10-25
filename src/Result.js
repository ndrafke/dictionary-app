import React from 'react'
import {Card} from 'react-bootstrap';


export default function Result({result}) {
    return (
    <Card>
        <Card.Body>
        <div className="d-flex flex-column justify-content-between">
        <Card.Title>
            <h2 >{result.word}</h2>
        </Card.Title>
        {result.results.map((info, index) => {
            return (
                <ul key={index}>
               
                <Card.Text >
       <li>({info.partOfSpeech}) {info.definition}</li> 
       
        </Card.Text>
        </ul>
            )
})}
               
        </div>  
        </Card.Body>
           
        </Card>
    )
}
