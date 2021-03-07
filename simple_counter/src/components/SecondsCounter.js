import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const SecondsCounter = () => {
    
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    let count1 = Math.floor(counter / 1 % 10)
    let count2 = Math.floor(counter / 10 % 10)
    let count3 = Math.floor(counter / 100 % 10)
    let count4 = Math.floor(counter / 1000 % 10)
    let count5 = Math.floor(counter / 10000 % 10)
    return (
    <Row>
        <Col><h1><i className="far fa-clock" /></h1></Col>
        <Col><h1>{count5}</h1></Col>
        <Col><h1>{count4}</h1></Col>
        <Col><h1>{count3}</h1></Col>
        <Col><h1>{count2}</h1></Col>
        <Col><h1>{count1}</h1></Col>
    </Row>)
};


export default SecondsCounter;
