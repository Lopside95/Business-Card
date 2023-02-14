import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Info from "./Info";
import Interests from "./Interests";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="app-container">
      <div className="App">
        <div className="main">
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
