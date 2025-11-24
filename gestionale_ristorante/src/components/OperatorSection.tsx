import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type Operator = { id: string; username: string; password: string };

const initialOperators: Operator[] = [
  { id: "operatore_01", username: "OPERATORE_01", password: "AKJ@DS784.!" },
  { id: "operatore_02", username: "OPERATORE_02", password: "SD@GDS-@.!" },
];

const panelStyle = {
  borderRadius: "26px",
  border: "3px solid #0f1827",
  background: "linear-gradient(180deg,#fdfdfd 0%,#b0b0b0 100%)",
};

const avatarStyle = {
  width: "160px",
  height: "210px",
  borderRadius: "30px",
  border: "4px solid #2a2a2a",
  background: "linear-gradient(180deg,#d7d7d7,#6b6b6b)",
};

function OperatorSection() {
  const [operators, setOperators] = useState(initialOperators);
  const [newOperator, setNewOperator] = useState<Operator>({ id: "", username: "", password: "" });

  const handleOperatorChange = (id: string, key: keyof Operator, value: string) => {
    setOperators((prev) => prev.map((op) => (op.id === id ? { ...op, [key]: value } : op)));
  };

  const saveOperator = (id: string) => {
    const updated = operators.find((op) => op.id === id);
    if (!updated) return;
    setOperators((prev) => prev.map((op) => (op.id === id ? updated : op)));
  };

  const handleNewChange = (key: keyof Operator, value: string) => {
    setNewOperator((prev) => ({ ...prev, [key]: value }));
  };

  const addOperator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOperator.username.trim() || !newOperator.password.trim()) return;
    const id = newOperator.username.toLowerCase();
    setOperators((prev) => [...prev, { ...newOperator, id }]);
    setNewOperator({ id: "", username: "", password: "" });
  };

  return (
    <section className="p-4 w-100 bg-white bg-opacity-95 rounded-5">
      <header
        className="text-uppercase fw-bold border border-2 rounded-top-4 px-4 py-2 mb-4"
        style={{ background: "#c2dbf7", borderColor: "#173a6d", letterSpacing: "0.15rem" }}
      >
        GESTIONE OPERATORI
      </header>

      <div className="d-flex flex-column gap-4">
        {operators.map((op) => (
          <div key={op.id} className="d-flex flex-column flex-lg-row gap-4" style={panelStyle}>
            <div className="d-flex flex-column align-items-center justify-content-center p-4">
              <div className="d-flex flex-column align-items-center justify-content-center" style={avatarStyle}>
                <span style={{ fontSize: "4rem" }}>👤</span>
              </div>
              <div className="mt-3 fw-bold text-uppercase">{op.username}</div>
            </div>
            <div className="flex-grow-1 p-4">
              <Form className="d-flex flex-column gap-3">
                <h6 className="text-uppercase text-center fw-bold">DATI UTENTE</h6>
                <Form.Group>
                  <Form.Label className="text-uppercase small fw-bold">Username</Form.Label>
                  <Form.Control
                    className="rounded-pill text-center"
                    value={op.username}
                    onChange={(e) => handleOperatorChange(op.id, "username", e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-uppercase small fw-bold">Password</Form.Label>
                  <Form.Control
                    className="rounded-pill text-center"
                    value={op.password}
                    type="password"
                    onChange={(e) => handleOperatorChange(op.id, "password", e.target.value)}
                  />
                </Form.Group>
                <Button className="rounded-pill fw-bold mt-2" onClick={() => saveOperator(op.id)}>
                  MODIFICA
                </Button>
              </Form>
            </div>
          </div>
        ))}

        <div className="d-flex flex-column flex-lg-row gap-4 align-items-stretch" style={panelStyle}>
          <div className="d-flex flex-column align-items-center justify-content-center p-4">
            <div className="d-flex align-items-center justify-content-center" style={{ ...avatarStyle, position: "relative" }}>
              <span style={{ fontSize: "4rem" }}>👤</span>
              <span
                className="position-absolute text-dark fw-bold"
                style={{ bottom: "18px", background: "#fff", borderRadius: "50%", width: "50px", height: "50px", lineHeight: "50px" }}
              >
                NEW
              </span>
            </div>
            <div className="mt-3 fw-bold text-uppercase">NUOVO UTENTE</div>
          </div>
          <Form onSubmit={addOperator} className="flex-grow-1 p-4 d-flex flex-column gap-3">
            <h6 className="text-uppercase text-center fw-bold">DATI UTENTE</h6>
            <Form.Group>
              <Form.Label className="text-uppercase small fw-bold">Username</Form.Label>
              <Form.Control
                className="rounded-pill text-center"
                value={newOperator.username}
                onChange={(e) => handleNewChange("username", e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-uppercase small fw-bold">Password</Form.Label>
              <Form.Control
                className="rounded-pill text-center"
                type="password"
                value={newOperator.password}
                onChange={(e) => handleNewChange("password", e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="secondary" className="rounded-pill fw-bold mt-2">
              SALVA
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default OperatorSection;
