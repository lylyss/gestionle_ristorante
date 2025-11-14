import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

function Hero() {
  return (
    <>
      <section className="text-border hero-background text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-2 text-center">Benvenuti al Bistrot</h1>
      </section>
      <Container>
        <div className="fixed-bottom d-flex justify-content-center mb-5">
          <NavLink className="mb-5" to="/menupage">
            <Button className="btn btn-secondary mb-5 fs-4">Scopri il menu</Button>
          </NavLink>
        </div>
      </Container>
    </>
  );
}

export default Hero;
