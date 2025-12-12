import { useState } from "react";
import type { BackofficeNavKey } from "../Interfaces/backoffice";
import AdminSection from "../components/AdminSection";
import SideBarBackoffice from "../components/SideBarBackooffice";
import backofficeBg from "../assets/media/bg_media/bar-counter.jpg";
import OperatorSection from "../components/OperatorSection";
import GraficiSection from "../components/GraficiSection";
import GestioneLocaleSection from "../components/GestioneLocaleSection";

const layoutStyles = {
  minHeight: "100vh",
  backgroundImage: `url(${backofficeBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function BackOfficePage() {
  const [activeItem, setActiveItem] = useState<BackofficeNavKey>("operatori");

  const handleAdminClick = () => setActiveItem("admin");

  return (
    <div className="d-flex" style={layoutStyles}>
      <SideBarBackoffice activeItem={activeItem} onSelect={setActiveItem} onAdminClick={handleAdminClick} onDisconnect={() => {}} />
      <main className="flex-grow-1 p-4 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", minHeight: "100vh" }}>
        {activeItem === "operatori" ? (
          <OperatorSection />
        ) : activeItem === "admin" ? (
          <AdminSection />
        ) : activeItem === "gestioneLocale" ? (
          <GestioneLocaleSection />
        ) : activeItem === "grafici" ? (
          <GraficiSection />
        ) : (
          <div className="text-center mt-5">Seleziona una sezione dalla sidebar.</div>
        )}
      </main>
    </div>
  );
}

export default BackOfficePage;
