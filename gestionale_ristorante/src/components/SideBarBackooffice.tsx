import { Button } from "react-bootstrap";

type NavItem = { key: string; label: string };

const navItems: NavItem[] = [
  { key: "operatori", label: "OPERATORI" },
  { key: "grafici", label: "GRAFICI" },
  { key: "gestione", label: "GESTIONE LOCALE" },
];

const panelGradient = "linear-gradient(180deg, #d9d9d9, #a6a6a6, #7a7a7a)";
const buttonGradient = "linear-gradient(90deg, #1b95c5ff, #3adfa869, #01a4b9ff)";

type Props = {
  username?: string;
  activeItem?: string;
  onSelect?: (key: string) => void;
  onDisconnect?: () => void;
  onAdminClick?: () => void;
};

function SideBarBackoffice({ username = "ADMIN_01", activeItem = "operatori", onSelect, onDisconnect, onAdminClick }: Props) {
  const handleAdminClick = () => {
    if (onAdminClick) return onAdminClick();
    onSelect?.("admin");
  };

  return (
    <aside
      className="d-flex flex-column align-items-center justify-content-between py-4"
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "rgba(4, 28, 43, 0.88)",
        borderRight: "4px solid rgba(3, 150, 150, 1)",
      }}
    >
      <div className="w-100 d-flex flex-column align-items-center gap-4 px-3">
        <div
          style={{
            width: "100%",
            padding: "0.6rem 1rem",
            background: "rgba(207, 233, 236, 1)",
            border: "2px solid #0a375cff",
            textAlign: "center",
            fontWeight: 700,
            fontSize: "1.5rem",
            fontStyle: "italic",
            letterSpacing: "0.2rem",
          }}
        >
          BACKOFFICE
        </div>

        <button
          type="button"
          onClick={handleAdminClick}
          className="w-100 d-flex flex-row align-items-center gap-3 p-3 border-0 bg-transparent"
          style={{ cursor: "pointer", borderRadius: "12px", background: activeItem === "admin" ? buttonGradient : "transparent" }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: panelGradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.8rem",
            }}
          >
            👤
          </div>
          <div className="flex-grow-1 text-center fw-bold">{username}</div>
        </button>

        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelect?.(item.key)}
            className="w-100 fw-bold border-0 py-2"
            style={{
              borderRadius: "8px",
              background: activeItem === item.key ? buttonGradient : "#e6e6e6",
              color: activeItem === item.key ? "#f8f8f8" : "#1a1a1a",
              boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.35)",
              letterSpacing: "0.05rem",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <Button
        variant="light"
        onClick={onDisconnect}
        className="w-75 fw-bold d-flex align-items-center justify-content-center gap-2 py-2"
        style={{
          borderRadius: "28px",
          background: panelGradient,
          border: "2px solid #131313",
          letterSpacing: "0.08rem",
        }}
      >
        SCONNETTI
        <span role="img" aria-label="logout">
          🔁
        </span>
      </Button>
    </aside>
  );
}

export default SideBarBackoffice;
