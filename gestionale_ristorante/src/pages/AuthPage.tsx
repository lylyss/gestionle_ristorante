import { Button, Container, Form } from "react-bootstrap";

function AuthPage() {
  return (
    <>
      <section className="text-border access-background text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="mt-5 d-flex justify-content-center">Accesso staff</h1>
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Form>
            <Form.Label className="fw-bold">Email o Username</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email o Username"
              required
              style={{ width: "300px" }}
            />
            <Form.Label className="mt-3 fw-bold">Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
            <div className="d-flex">
              <Button variant="secondary" type="submit" className="w-100 mt-4 mx-auto">
                Accedi
              </Button>
            </div>
          </Form>
        </Container>
      </section>
    </>
  );
}

export default AuthPage;
