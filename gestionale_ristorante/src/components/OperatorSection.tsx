import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type Operator = { id: string; username: string; password: string };

const initialOperators: Operator[] = [
  { id: "operatore_01", username: "OPERATORE_01", password: "AKJ@DS784.!" },
  { id: "operatore_02", username: "OPERATORE_02", password: "SD@GDS-@.!" },
];

const panelStyle = {
  borderRadius: "18px",
  border: "2px solid #084883ff",
  background: "linear-gradient(180deg, #132147ff 0%, #b9b9b9 100%)",
};

const avatarStyle = {
  width: "150px",
  height: "190px",
  borderRadius: "40px",
  border: "3px solid #2c2c2c",
  background: "linear-gradient(180deg,#c3c3c3,#7c7c7c)",
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
    <section className="p-4 w-100" style={{ background: "rgba(29, 66, 66, 0.9)", borderRadius: "24px" }}>
      <header className="text-uppercase fw-bold border px-4 py-2 mb-4" style={{ background: "#142433ff", borderColor: "#1c4a7d", letterSpacing: "0.2rem" }}>
        GESTIONE OPERATORI
      </header>

      <div className="d-flex flex-column gap-4">
        {operators.map((op) => (
          <div key={op.id} className="d-flex flex-column flex-lg-row gap-4 text-white" style={panelStyle}>
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

        <div className="d-flex flex-column flex-lg-row gap-4 align-items-stretch text-white" style={panelStyle}>
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
