import { Button, Card, Col } from "react-bootstrap";

function SingleProduct() {
  return (
    <Col>
      <Card className="product-card mb-2 mt-5 bg-light rounded-2 p-3 shadow border-0">
        <img className="w-100" style={{ height: "190px", objectFit: "contain" }} alt="immagine" />
        <p className="text-truncate"></p>
        <p></p>
        <Button variant="secondary" className="w-100 rounded-2 border-0 text-white fw-bold">
          Aggiungi al carrello
        </Button>
        {/* <Col key={data.id}>
        <Card className="product-card mb-2 mt-5 bg-light rounded-2 p-3 shadow border-0">
          <img
            className="w-100 "
            style={{ height: "190px", objectFit: "contain" }}
            src={data.foto}
            alt="immagine"
            onClick={() => {
              navigate("/details/" + data.id, { state: { data } });
            }}
          />
          <p className="text-truncate">{data.nome}</p>
          <p>{data.prezzo} €</p>
          <Button variant="secondary" className="w-100 rounded-2 border-0 text-white fw-bold">
            Aggiungi al carrello
          </Button>
          {user && user.ruolo === "ADMIN" && (
            <div className="d-flex gap-2 justify-content-center mt-3">
              <Button
                onClick={() => {
                  navigate("/updateproduct", { state: { data } });
                }}
                variant="dark"
                className="w-100"
              >
                Modifica
              </Button>
              <Button
                className="w-100"
                variant="dark"
                onClick={() => {
                  eliminaProdotto(data.id);
                }}
              >
                Elimina
              </Button>
            </div>
          )}
        </Card>
      </Col> */}
      </Card>
    </Col>
  );
}

export default SingleProduct;
