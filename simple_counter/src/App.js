import SecondsCounter from './components/SecondsCounter.js';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <Container>
            <SecondsCounter />
        </Container>
    </div>
  );
}

export default App;
