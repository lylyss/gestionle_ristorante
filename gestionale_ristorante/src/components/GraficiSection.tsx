import { useMemo } from "react";
import { useState } from "react";
import { Button, ButtonGroup, Form, Spinner, Alert } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from "chart.js";
import { useChartData } from "../hooks/useChartData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const tabs = [
  { key: "consumo", label: "STATISTICA CONSUMO ANNUALE" },
  { key: "incassi", label: "STATISTICA INCASSI" },
  { key: "menu", label: "GESTIONE MENÙ" },
] as const;

const sectionStyle = {
  background: "rgba(29, 66, 66, 0.9)",
  borderRadius: "24px",
};

const headerStyle = {
  borderRadius: "18px",
  border: "2px solid #008c9eff",
  background: "#142433ff",
  letterSpacing: "0.15rem",
};

const cardStyle = {
  borderRadius: "18px",
  border: "2px solid #0a192f",
  background: "linear-gradient(180deg,#ececec,#bdbdbd)",
};

function ChartCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="p-3 flex-grow-1" style={cardStyle}>
      <div className="d-flex flex-wrap justify-content-between align-items-center border border-dark rounded-3 px-3 py-2 mb-3 bg-white">
        <strong className="text-uppercase">{title}</strong>
        {subtitle && <small className="fw-bold">{subtitle}</small>}
      </div>
      {children}
    </div>
  );
}

function PlaceholderChart({ type }: { type: "radar" | "pie" | "area" | "bar" }) {
  const bg =
    type === "pie"
      ? "radial-gradient(circle,#ffe0e0,#f9a9a9)"
      : type === "radar"
      ? "radial-gradient(circle,#e0f7ff,#92c5ff)"
      : type === "area"
      ? "linear-gradient(180deg,#7ed0ff,#a78bfa)"
      : "linear-gradient(90deg,#7ed0ff,#c084fc)";
  return <div className="w-100 border border-dark rounded-4" style={{ minHeight: "240px", background: bg, opacity: 0.85 }} />;
}

function FiltersRow() {
  return (
    <div className="d-flex flex-wrap gap-3">
      <Form.Select size="sm" className="flex-grow-1">
        <option>CONSUMO ANNUALE</option>
      </Form.Select>
      <Form.Select size="sm" className="flex-grow-1">
        <option>CATEGORIA: PRIMI</option>
      </Form.Select>
      <Form.Select size="sm" className="flex-grow-1">
        <option>PIETANZA: Tortelli</option>
      </Form.Select>
    </div>
  );
}

function GraficiSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("consumo");
  const { data, loading, error, refetch } = useChartData({ metric: "incassi" });

  const chartConfig = useMemo(
    () =>
      data
        ? {
            labels: data.labels,
            datasets: data.datasets,
          }
        : undefined,
    [data]
  );

  const renderContent = () => {
    if (activeTab === "incassi") {
      return (
        <div className="d-flex flex-column gap-4">
          <ChartCard title="INCASSI MENSILI" subtitle="Dal: 01/01/2025 - 30/01/2025">
            <PlaceholderChart type="area" />
          </ChartCard>
          <div className="d-flex flex-column flex-xl-row gap-4">
            <ChartCard title="INCASSI SETTIMANALI" subtitle="Categoria: Primi">
              <PlaceholderChart type="bar" />
            </ChartCard>
            <ChartCard title="TOP PRODOTTI" subtitle="Periodo: Annuale">
              <PlaceholderChart type="pie" />
            </ChartCard>
          </div>
        </div>
      );
    }

    if (activeTab === "menu") {
      return (
        <div className="d-flex flex-column gap-4">
          <ChartCard title="GESTIONE MENÙ" subtitle="Categorie attive">
            <div className="bg-white rounded-4 p-3">
              <div className="d-flex flex-wrap gap-3">
                {["Primi", "Secondi", "Dessert", "Bevande", "Caffè"].map((cat) => (
                  <Button key={cat} size="sm" variant="dark" className="rounded-pill px-3">
                    {cat}
                  </Button>
                ))}
              </div>
              <div className="mt-4 border-top pt-3 d-flex flex-column gap-2">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="d-flex justify-content-between">
                    <span className="fw-semibold">Piatto #{idx}</span>
                    <span className="text-muted">Disponibile</span>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
          <ChartCard title="NUOVA VOCE MENÙ">
            <Form className="d-flex flex-column gap-3">
              <Form.Control placeholder="Nome pietanza" className="rounded-pill text-center" />
              <Form.Control placeholder="Categoria" className="rounded-pill text-center" />
              <Form.Control placeholder="Prezzo" className="rounded-pill text-center" />
              <Button className="rounded-pill fw-bold align-self-end px-5">SALVA</Button>
            </Form>
          </ChartCard>
        </div>
      );
    }

    return (
      <>
        <div className="d-flex flex-column flex-xl-row gap-4">
          <ChartCard title="CONSUMO" subtitle="Dal: 30/12/2025 - 05/01/2025 | Categoria: Primi">
            <PlaceholderChart type="radar" />
          </ChartCard>
          <ChartCard title="CONSUMO ANNUALE" subtitle="Categoria: Primi | Pietanza: Tortelli">
            <PlaceholderChart type="pie" />
          </ChartCard>
        </div>
        <div className="mt-4" style={cardStyle}>
          <div className="p-3">
            <FiltersRow />
          </div>
          <div className="px-3 pb-3">
            <PlaceholderChart type="bar" />
          </div>
        </div>
      </>
    );
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!chartConfig) return null;

  return (
    <section className="p-4 w-100 text-white" style={sectionStyle}>
      <header className="text-uppercase fw-bold px-4 py-2 mb-4 text-center" style={headerStyle}>
        GRAFICI
      </header>

      <ButtonGroup className="w-100 mb-4">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            variant={tab.key === activeTab ? "light" : "outline-light"}
            className="fw-bold text-uppercase"
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </ButtonGroup>

      <div className="d-flex flex-column gap-4">{renderContent()}</div>
      <Line data={chartConfig} />
      <button className="btn btn-outline-primary mt-3" onClick={refetch}>
        Aggiorna dati
      </button>
    </section>
  );
}

export default GraficiSection;
