import { useMemo, useState } from "react";
import { Badge, Button, Card, Col, Form, Row, Table as RBTable } from "react-bootstrap";

type LocaleTab = "tables" | "history" | "menu";
type TableStatus = "Libero" | "Occupato" | "Conto" | "Prenotato";

interface TableInfo {
  id: string;
  seats: number;
  status: TableStatus;
  operator: string;
  lastOrderId: string;
  guests: number;
  area: "Sala" | "Terrazza" | "Banco";
}

interface HistoryOrder {
  orderId: string;
  table: string;
  operator: string;
  total: number;
  time: string;
}

interface HistorySection {
  key: string;
  title: string;
  dateRange: string;
  orders: HistoryOrder[];
}

interface MenuItem {
  id: string;
  name: string;
  price: number;
  available: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  color: string;
  items: MenuItem[];
}

const initialTables: TableInfo[] = [
  { id: "01", seats: 2, status: "Libero", operator: "OPERATORE_01", lastOrderId: "1545154", guests: 0, area: "Sala" },
  { id: "02", seats: 2, status: "Prenotato", operator: "OPERATORE_03", lastOrderId: "1524324", guests: 2, area: "Sala" },
  { id: "03", seats: 6, status: "Occupato", operator: "OPERATORE_02", lastOrderId: "1524584", guests: 5, area: "Sala" },
  { id: "04", seats: 4, status: "Libero", operator: "OPERATORE_01", lastOrderId: "1524874", guests: 0, area: "Sala" },
  { id: "05", seats: 6, status: "Conto", operator: "OPERATORE_02", lastOrderId: "1521456", guests: 4, area: "Sala" },
  { id: "06", seats: 6, status: "Occupato", operator: "OPERATORE_04", lastOrderId: "1524874", guests: 6, area: "Sala" },
  { id: "07", seats: 2, status: "Libero", operator: "OPERATORE_01", lastOrderId: "1524584", guests: 0, area: "Terrazza" },
  { id: "08", seats: 2, status: "Prenotato", operator: "OPERATORE_03", lastOrderId: "1521456", guests: 2, area: "Terrazza" },
  { id: "09", seats: 2, status: "Libero", operator: "OPERATORE_02", lastOrderId: "1524324", guests: 0, area: "Terrazza" },
  { id: "10", seats: 2, status: "Occupato", operator: "OPERATORE_05", lastOrderId: "1524874", guests: 2, area: "Sala" },
  { id: "BANCO", seats: 6, status: "Occupato", operator: "OPERATORE_BAR", lastOrderId: "BAR_004", guests: 4, area: "Banco" },
];

const historySections: HistorySection[] = [
  {
    key: "daily",
    title: "Giornaliero",
    dateRange: "05/06/2025",
    orders: [
      { orderId: "1545154", table: "01", operator: "OPERATORE_02", total: 125, time: "15:25" },
      { orderId: "1524324", table: "03", operator: "OPERATORE_01", total: 78, time: "16:40" },
      { orderId: "1521456", table: "05", operator: "OPERATORE_02", total: 210, time: "18:15" },
    ],
  },
  {
    key: "weekly",
    title: "Settimana",
    dateRange: "05/06/2025 - 12/06/2025",
    orders: [
      { orderId: "SETT-01", table: "06", operator: "OPERATORE_04", total: 540, time: "Media" },
      { orderId: "SETT-02", table: "BANCO", operator: "OPERATORE_BAR", total: 320, time: "Media" },
    ],
  },
  {
    key: "yearly",
    title: "Anno",
    dateRange: "2025",
    orders: [{ orderId: "ANNO-01", table: "All", operator: "STAFF", total: 54890, time: "Progressivo" }],
  },
];

const defaultMenu: MenuCategory[] = [
  {
    id: "antipasti",
    name: "Antipasti",
    color: "#fca311",
    items: [
      { id: "a1", name: "Bruschetta al Pomodoro", price: 7, available: true },
      { id: "a2", name: "Tagliere Misto", price: 12, available: true },
    ],
  },
  {
    id: "primi",
    name: "Primi Piatti",
    color: "#e63946",
    items: [
      { id: "p1", name: "Risotto allo Zafferano", price: 14, available: true },
      { id: "p2", name: "Tagliatelle al Ragù", price: 13, available: false },
    ],
  },
  {
    id: "secondi",
    name: "Secondi Piatti",
    color: "#2a9d8f",
    items: [
      { id: "s1", name: "Filetto di Manzo", price: 22, available: true },
      { id: "s2", name: "Branzino al Forno", price: 20, available: true },
    ],
  },
  {
    id: "dessert",
    name: "Dessert",
    color: "#6d597a",
    items: [
      { id: "d1", name: "Torta Meringata", price: 8, available: true },
      { id: "d2", name: "Tiramisù", price: 7, available: true },
    ],
  },
];

const statusColors: Record<TableStatus, string> = {
  Libero: "#2dc653",
  Occupato: "#ff6b6b",
  Conto: "#ffba08",
  Prenotato: "#4ea8de",
};

const statusOptions: TableStatus[] = ["Libero", "Occupato", "Conto", "Prenotato"];

const tabButtons: { key: LocaleTab; label: string }[] = [
  { key: "tables", label: "GESTIONE TAVOLI" },
  { key: "history", label: "STORICO CONTI" },
  { key: "menu", label: "GESTIONE MENÙ" },
];

function GestioneLocaleSection() {
  const [activeTab, setActiveTab] = useState<LocaleTab>("tables");
  const [tables, setTables] = useState<TableInfo[]>(initialTables);
  const [selectedId, setSelectedId] = useState<string>(initialTables[0].id);
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>(defaultMenu);
  const [newDish, setNewDish] = useState({ category: defaultMenu[0].id, name: "", price: "" });

  const selectedTable = useMemo(() => tables.find((t) => t.id === selectedId), [selectedId, tables]);

  const updateTable = (id: string, patch: Partial<TableInfo>) => {
    setTables((prev) => prev.map((table) => (table.id === id ? { ...table, ...patch } : table)));
  };

  const handleAddTable = () => {
    const nextNumericId =
      tables
        .map((t) => parseInt(t.id.replace(/\D/g, ""), 10))
        .filter((n) => !Number.isNaN(n))
        .reduce((max, curr) => Math.max(max, curr), 0) + 1;
    const newId = nextNumericId.toString().padStart(2, "0");
    const newTable: TableInfo = {
      id: newId,
      seats: 4,
      status: "Libero",
      operator: "OPERATORE_01",
      lastOrderId: `NEW_${Date.now()}`,
      guests: 0,
      area: "Sala",
    };
    setTables((prev) => [...prev, newTable]);
    setSelectedId(newId);
  };

  const cycleStatus = (current: TableStatus): TableStatus => {
    const nextIndex = (statusOptions.indexOf(current) + 1) % statusOptions.length;
    return statusOptions[nextIndex];
  };

  const toggleDishAvailability = (categoryId: string, itemId: string) => {
    setMenuCategories((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              items: category.items.map((item) => (item.id === itemId ? { ...item, available: !item.available } : item)),
            }
          : category
      )
    );
  };

  const handleAddDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDish.name || !newDish.price) return;
    setMenuCategories((prev) =>
      prev.map((category) =>
        category.id === newDish.category
          ? {
              ...category,
              items: [
                ...category.items,
                {
                  id: `${category.id}_${Date.now()}`,
                  name: newDish.name,
                  price: Number(newDish.price),
                  available: true,
                },
              ],
            }
          : category
      )
    );
    setNewDish((curr) => ({ ...curr, name: "", price: "" }));
  };

  const renderTablesTab = () => (
    <Row className="g-4">
      <Col lg={5}>
        <Card className="h-100 shadow">
          <Card.Header className="bg-dark text-white text-uppercase fw-bold">Lista Tavoli</Card.Header>
          <Card.Body className="d-flex flex-column gap-3">
            <div className="d-flex flex-wrap gap-2">
              {tables.map((table) => (
                <Button
                  key={table.id}
                  variant={table.id === selectedId ? "primary" : "outline-secondary"}
                  className="rounded-pill px-3 py-2"
                  onClick={() => setSelectedId(table.id)}
                >
                  Tavolo {table.id}{" "}
                  <Badge bg="light" text="dark" className="ms-2" style={{ backgroundColor: statusColors[table.status] }}>
                    {table.status}
                  </Badge>
                </Button>
              ))}
            </div>

            {selectedTable && (
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-secondary text-white d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-uppercase">Dettagli Tavolo {selectedTable.id}</span>
                  <Button size="sm" variant="light" onClick={() => updateTable(selectedTable.id, { status: cycleStatus(selectedTable.status) })}>
                    Cambia Stato
                  </Button>
                </Card.Header>
                <Card.Body className="d-flex flex-column gap-3">
                  <Form.Group>
                    <Form.Label className="small text-uppercase fw-bold">Operatore</Form.Label>
                    <Form.Control
                      value={selectedTable.operator}
                      onChange={(e) => updateTable(selectedTable.id, { operator: e.target.value })}
                      className="rounded-pill"
                    />
                  </Form.Group>
                  <Row className="g-3">
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className="small text-uppercase fw-bold">Posti</Form.Label>
                        <Form.Control
                          type="number"
                          min={1}
                          value={selectedTable.seats}
                          onChange={(e) => updateTable(selectedTable.id, { seats: Number(e.target.value) })}
                          className="rounded-pill"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className="small text-uppercase fw-bold">Ospiti</Form.Label>
                        <Form.Control
                          type="number"
                          min={0}
                          value={selectedTable.guests}
                          onChange={(e) => updateTable(selectedTable.id, { guests: Number(e.target.value) })}
                          className="rounded-pill"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <Form.Label className="small text-uppercase fw-bold">Ultimo ordine</Form.Label>
                    <Form.Control value={selectedTable.lastOrderId} readOnly className="rounded-pill" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="small text-uppercase fw-bold">Stato</Form.Label>
                    <Form.Select
                      value={selectedTable.status}
                      className="rounded-pill"
                      onChange={(e) => updateTable(selectedTable.id, { status: e.target.value as TableStatus })}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Card.Body>
              </Card>
            )}
          </Card.Body>
        </Card>
      </Col>

      <Col lg={7}>
        <Card className="h-100 shadow">
          <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
            <span className="text-uppercase fw-bold">Planimetria</span>
            <Button variant="success" className="rounded-pill" onClick={handleAddTable}>
              + Aggiungi Tavolo
            </Button>
          </Card.Header>
          <Card.Body>
            <div
              className="w-100"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1rem",
              }}
            >
              {tables.map((table) => (
                <button
                  key={table.id}
                  className="border-0 rounded-4 p-3 text-uppercase fw-bold shadow-sm"
                  style={{
                    background: table.id === selectedId ? "#0d6efd" : "#f8f9fa",
                    color: table.id === selectedId ? "#fff" : "#212529",
                    border: `3px solid ${statusColors[table.status]}`,
                    minHeight: table.id === "BANCO" ? "150px" : "120px",
                  }}
                  onClick={() => setSelectedId(table.id)}
                >
                  <div style={{ fontSize: "1.1rem" }}>{table.id === "BANCO" ? "BANCO BAR" : `Tavolo ${table.id}`}</div>
                  <div className="small fw-normal">Posti: {table.seats}</div>
                  <div className="small fw-normal">Area: {table.area}</div>
                  <div className="mt-2 fw-bold">{table.status}</div>
                </button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );

  const renderHistoryTab = () => (
    <Row className="g-4">
      {historySections.map((section) => (
        <Col lg={4} key={section.key}>
          <Card className="h-100 shadow">
            <Card.Header className="bg-dark text-white text-uppercase fw-bold d-flex flex-column">
              {section.title}
              <small className="fw-normal text-white-50">{section.dateRange}</small>
            </Card.Header>
            <Card.Body className="p-0">
              <RBTable striped hover responsive className="mb-0">
                <thead>
                  <tr>
                    <th>Ordine</th>
                    <th>Tavolo</th>
                    <th>Operatore</th>
                    <th>Totale</th>
                  </tr>
                </thead>
                <tbody>
                  {section.orders.map((order) => (
                    <tr key={order.orderId}>
                      <td>
                        {order.orderId}
                        <div className="small text-muted">{order.time}</div>
                      </td>
                      <td>{order.table}</td>
                      <td>{order.operator}</td>
                      <td>{order.total.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}</td>
                    </tr>
                  ))}
                </tbody>
              </RBTable>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  const renderMenuTab = () => (
    <Row className="g-4">
      <Col lg={4}>
        <Card className="h-100 shadow">
          <Card.Header className="bg-dark text-white text-uppercase fw-bold">Nuovo Piatto</Card.Header>
          <Card.Body>
            <Form className="d-flex flex-column gap-3" onSubmit={handleAddDish}>
              <Form.Group>
                <Form.Label className="small text-uppercase fw-bold">Categoria</Form.Label>
                <Form.Select className="rounded-pill" value={newDish.category} onChange={(e) => setNewDish((curr) => ({ ...curr, category: e.target.value }))}>
                  {menuCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label className="small text-uppercase fw-bold">Nome piatto</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  value={newDish.name}
                  onChange={(e) => setNewDish((curr) => ({ ...curr, name: e.target.value }))}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="small text-uppercase fw-bold">Prezzo (€)</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  step="0.5"
                  className="rounded-pill"
                  value={newDish.price}
                  onChange={(e) => setNewDish((curr) => ({ ...curr, price: e.target.value }))}
                  required
                />
              </Form.Group>
              <Button type="submit" className="rounded-pill fw-bold">
                Salva
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={8}>
        <Row className="g-4">
          {menuCategories.map((category) => (
            <Col md={6} key={category.id}>
              <Card className="shadow h-100">
                <Card.Header className="text-white text-uppercase fw-bold" style={{ backgroundColor: category.color }}>
                  {category.name}
                </Card.Header>
                <Card.Body className="d-flex flex-column gap-3">
                  {category.items.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center border rounded-4 px-3 py-2">
                      <div>
                        <div className="fw-bold">{item.name}</div>
                        <div className="small text-muted">{item.price.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}</div>
                      </div>
                      <Button
                        size="sm"
                        variant={item.available ? "success" : "outline-secondary"}
                        className="rounded-pill"
                        onClick={() => toggleDishAvailability(category.id, item.id)}
                      >
                        {item.available ? "Disponibile" : "Non disp."}
                      </Button>
                    </div>
                  ))}
                  {category.items.length === 0 && <span className="text-muted small">Nessun piatto inserito.</span>}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );

  return (
    <section className="p-4 w-100">
      <Card className="bg-dark bg-opacity-75 text-white rounded-4 p-4 border border-info">
        <Card.Title className="text-uppercase fw-bold letter-spacing">Gestione Locale</Card.Title>
        <Card.Text>Da qui potrai configurare le impostazioni del locale e monitorare lo stato generale.</Card.Text>
      </Card>

      <header className="d-flex flex-wrap gap-3 mb-4">
        {tabButtons.map((tab) => (
          <Button
            key={tab.key}
            variant={tab.key === activeTab ? "light" : "outline-light"}
            className="text-uppercase fw-bold rounded-pill px-4"
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </header>

      {activeTab === "tables" && renderTablesTab()}
      {activeTab === "history" && renderHistoryTab()}
      {activeTab === "menu" && renderMenuTab()}
    </section>
  );
}

export default GestioneLocaleSection;
