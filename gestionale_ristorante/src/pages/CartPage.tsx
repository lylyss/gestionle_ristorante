import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <>
      <Row className="navbar-padding px-0 mx-0">
        <Col sm={12}>
          <ListGroup className="w-100 ">
            {cart.content.length > 0 ? (
              cart.content.map((item, i) => (
                <ListGroup.Item key={i} className="my-4 bg-dark text-white border-0 text-center text-lg-start">
                  <Button
                    className="btn btn-danger me-auto"
                    variant="danger"
                    onClick={() => {
                      removeFromCart(i);
                    }}
                  >
                    <i className="bi bi-trash fs-4"></i>
                  </Button>
                  <Card.Img className="d-inline-block ms-4 pe-5" style={{ maxWidth: "180px" }} src={item.immagine} alt="product" />
                  <Card.Text className="d-inline-block">{item.nome}</Card.Text>
                  <Card.Text className="d-inline-block ms-5">{item.prezzo}€</Card.Text>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="mt-3 bg-dark text-white border-0">
                <span className="fs-1 me-5">
                  <i className="bi bi-cart-fill"></i>
                </span>
                <span className="fw-bold">Il tuo carrello è vuoto</span>
              </ListGroup.Item>
            )}
          </ListGroup>
          <div className="text-center fw-bold mt-3">
            Il totale del carrello è: <span className="text-danger">{parseFloat(cart.cartTotal).toFixed(2)} €</span>
            {cart.content.length > 0 && (
              <NavLink to="checkout">
                <Button className="btn btn-danger ms-3">Checkout</Button>
              </NavLink>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Cart;
