import { Button, Container, Form } from "react-bootstrap";

const heroStyles = {
  minHeight: "100vh",
  backgroundImage:
    "linear-gradient(90deg, rgba(5,5,5,0.75), rgba(5,5,5,0.55)), url('https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1600&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function AuthPage() {
  return (
    <>
      <section className="text-white d-flex align-items-center" style={heroStyles}>
        <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5">
          <div className="text-center text-lg-start">
            <p className="text-uppercase letter-spacing-2 mb-2">Accesso staff</p>
            <h1 className="display-1 fw-light" style={{ letterSpacing: "0.75rem" }}>
              GASTROPUB
            </h1>
          </div>
          <Form className="bg-white bg-opacity-10 rounded-4 p-4 shadow-lg" style={{ width: "320px", backdropFilter: "blur(8px)" }}>
            <Form.Label className=" fw-semibold  mb-2">Username:</Form.Label>
            <Form.Control
              className="rounded-pill border-0 mb-3 px-4 text-center"
              name="username"
              type="text"
              placeholder="Username"
              required
              style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
            />
            <Form.Label className=" fw-semibold  mb-2">Password:</Form.Label>
            <Form.Control
              className="rounded-pill border-0 mb-4 px-4 text-center text-black"
              name="password"
              type="password"
              placeholder="************"
              required
              style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
            />
            <Button variant="light" type="submit" className="w-100 rounded-4 fw-semibold text-uppercase" style={{ letterSpacing: "0.3rem" }}>
              ACCEDI
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
}

export default AuthPage;
