import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { type AdminAccount, type AdminSectionProps, DEFAULT_ADMIN_ACCOUNT } from "../Interfaces/backoffice";

const panelBase = {
  borderRadius: "18px",
  border: "2px solid #084883ff",
  background: "linear-gradient(180deg, #132147ff 0%, #b9b9b9 100%)",
};

function AdminSection({ initialAdmin = DEFAULT_ADMIN_ACCOUNT, onUpdateAdmin, onCreateAdmin }: AdminSectionProps) {
  const [adminInfo, setAdminInfo] = useState<AdminAccount>(initialAdmin);
  const [editForm, setEditForm] = useState<AdminAccount>(initialAdmin);
  const [newAdminForm, setNewAdminForm] = useState<AdminAccount>({ username: "", password: "" });

  const handleEditChange = (key: keyof AdminAccount, value: string) => {
    setEditForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleNewChange = (key: keyof AdminAccount, value: string) => {
    setNewAdminForm((prev) => ({ ...prev, [key]: value }));
  };

  const submitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminInfo(editForm);
    onUpdateAdmin?.(editForm);
  };

  const submitNew = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateAdmin?.(newAdminForm);
    setNewAdminForm({ username: "", password: "" });
  };

  return (
    <section className="p-4 w-100" style={{ background: "rgba(29, 66, 66, 0.9)", borderRadius: "24px" }}>
      <header
        className="text-uppercase fw-bold  px-4 py-2 mb-4"
        style={{ background: "#142433ff", borderColor: "#1c4a7d", border: "2px solid #008c9eff", borderRadius: "24px", letterSpacing: "0.2rem" }}
      >
        DATI PERSONALI
      </header>

      <div className="d-flex flex-column flex-xxl-row gap-4">
        <div className="text-center p-4 flex-fill" style={panelBase}>
          <div
            className="mx-auto mb-3 d-flex flex-column align-items-center justify-content-center"
            style={{
              width: "160px",
              height: "200px",
              borderRadius: "50px",
              background: "linear-gradient(180deg,#c3c3c3,#7c7c7c)",
              border: "3px solid #2c2c2c",
            }}
          >
            <div style={{ fontSize: "3rem" }}>👤</div>
          </div>
          <h5 className="fw-bold mb-0">{adminInfo.username}</h5>
        </div>

        <Form onSubmit={submitEdit} className="p-4 flex-fill d-flex flex-column gap-3" style={panelBase}>
          <h5 className="text-uppercase text-center fw-bold">DATI UTENTE</h5>
          <Form.Group>
            <Form.Label className="text-uppercase small fw-bold">Username</Form.Label>
            <Form.Control
              value={editForm.username}
              onChange={(e) => handleEditChange("username", e.target.value)}
              className="rounded-pill text-center"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-uppercase small fw-bold">Password</Form.Label>
            <Form.Control
              value={editForm.password}
              onChange={(e) => handleEditChange("password", e.target.value)}
              className="rounded-pill text-center"
              required
              type="password"
            />
          </Form.Group>
          <Button type="submit" className="rounded-pill fw-bold mt-2">
            MODIFICA
          </Button>
        </Form>

        <Form onSubmit={submitNew} className="p-4 flex-fill d-flex flex-column gap-3" style={panelBase}>
          <div className="d-flex align-items-center gap-3">
            <div>
              <h5 className="fw-bold mb-0">NUOVO ADMIN</h5>
              <small className="text-muted, text-color-white">Crea un nuovo account privilegiato</small>
            </div>
          </div>
          <Form.Group className="pt-2">
            <Form.Label className="text-uppercase small fw-bold">Username</Form.Label>
            <Form.Control
              value={newAdminForm.username}
              onChange={(e) => handleNewChange("username", e.target.value)}
              className="rounded-pill text-center"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-uppercase small fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              value={newAdminForm.password}
              onChange={(e) => handleNewChange("password", e.target.value)}
              className="rounded-pill text-center"
              required
            />
          </Form.Group>
          <Button type="submit" variant="secondary" className="rounded-pill fw-bold mt-2">
            SALVA
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default AdminSection;
