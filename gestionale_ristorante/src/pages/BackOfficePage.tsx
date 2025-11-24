import { useState } from "react";
import AdminSection from "../components/AdminSection";
import SideBarBackoffice from "../components/SideBarBackooffice";
import backofficeBg from "../assets/media/bg_media/bar-counter.jpg";

const layoutStyles = {
  minHeight: "100vh",
  backgroundImage: `url(${backofficeBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function BackOfficePage() {
  const [activeItem, setActiveItem] = useState("operatori");

  const handleAdminClick = () => setActiveItem("admin");

  return (
    <div className="d-flex" style={layoutStyles}>
      <SideBarBackoffice activeItem={activeItem} onSelect={setActiveItem} onAdminClick={handleAdminClick} onDisconnect={() => {}} />
      <main className="flex-grow-1 p-4 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", minHeight: "100vh" }}>
        {activeItem === "admin" ? <AdminSection /> : <div>{/* altri componenti di backoffice , da aggiungere in seguito . */}</div>}
      </main>
    </div>
  );
}

export default BackOfficePage;
