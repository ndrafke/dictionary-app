import React from 'react';
import {Pagination} from 'react-bootstrap';

export default function WordPage({page, setPage, nextPage}) {
const adjustPage = (amount) => {
    setPage(prevPage => prevPage + amount)
}

    return (
       <Pagination>
       {page !== 1 &&   <Pagination.Prev onClick={()=> adjustPage(-1)} /> } 
        {page !== 1 && <Pagination.Item onClick={() => setPage(1)} >1</Pagination.Item>}
        {page > 2 && <Pagination.Ellipsis /> }
        {page > 2 && <Pagination.Item onClick={() => adjustPage(-1)} >{page - 1}</Pagination.Item>}
        <Pagination.Item active>{page}</Pagination.Item>
       {nextPage && <Pagination.Item onClick={()=> adjustPage(1)}>{page + 1}</Pagination.Item>}
         {nextPage && <Pagination.Next onClick={()=> adjustPage(-1)} />} 
        </Pagination>
    )
}
