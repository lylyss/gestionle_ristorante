import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

function Hero() {
  return (
    <Container>
      <div className="d-flex justify-content-center mt-5">
        <h1>Benvenuti al Bistrot</h1>
      </div>
      <div className="fixed-bottom d-flex justify-content-center mb-5">
        <NavLink to="/menupage">
          <Button className="btn btn-secondary mb-5 fs-4">Sfoglia il menu</Button>
        </NavLink>
      </div>
    </Container>
  );
}

export default Hero;
