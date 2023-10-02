import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './App.css';
import PartsCard from './PartsCard';


function Parts() {
  
    const [parts, setParts] = useState([]);
    useEffect(() => {
        const URL = `https://my.api.mockaroo.com/parts.json?key=c54f24b0`;
        fetch(URL, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        })
        .then((data) => data.json())
        .then((data) => {
            setParts(data);
        });
    }, []);

    function getContent(){
        return (
            <Row className="parts-row">
              {parts.map((element) => (
                <Container key={element.id} md={6} xs={6}>
                  
                  <PartsCard part={element} />
                  
                </Container>
              ))}
            </Row>
          );
    }

  return(
    <div className="part">
        {getContent()}
    </div>
  );
}


export default Parts;
