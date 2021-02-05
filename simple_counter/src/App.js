import './App.css';
import SecondsCounter from './components/SecondsCounter.js'
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col><h1><i className="far fa-clock" /></h1></Col>
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
