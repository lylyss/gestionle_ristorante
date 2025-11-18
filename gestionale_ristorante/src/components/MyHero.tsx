import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

function Hero() {
  return (
    <>
      <section className="hero-background d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-1 text-center text-light">Benvenuti al Bistrot</h1>
      </section>
      <Container>
        <div className="fixed-bottom d-flex justify-content-center mb-5">
          <NavLink className="mb-5" to="/menu">
            <Button className="btn btn-secondary mb-5 fs-1">Scopri il menu</Button>
          </NavLink>
        </div>
      </Container>
    </>
  );
}

export default Hero;
