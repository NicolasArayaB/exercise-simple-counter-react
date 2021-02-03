import './App.css';
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const SecondsCounter = (props) => {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const num = setInterval(() => {
            setSeconds(s => s + 1);
        }, props.multiplier);
        return () => clearInterval(num);
    });
    if (seconds < 10){
        return <h1>{seconds}</h1>;
    }else if (seconds >= 10){
        return <SecondsCounter multiplier={props.multiplier}/>
    }    
}

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col><h1><i className="fas fa-clock" /></h1></Col>
                <Col><SecondsCounter multiplier="10000000" /></Col>
                <Col><SecondsCounter multiplier="1000000" /></Col>
                <Col><SecondsCounter multiplier="100000" /></Col>
                <Col><SecondsCounter multiplier="10000" /></Col>
                <Col><SecondsCounter multiplier="1000" /></Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
