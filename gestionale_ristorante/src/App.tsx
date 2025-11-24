import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import MenuPage from "./pages/MenuPage";
import BackOfficePage from "./pages/BackOfficePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/backoffice" element={<BackOfficePage />} />
    </Routes>
  );
}

export default App;
