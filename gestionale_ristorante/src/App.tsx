import HomePage from "./pages/HomePage";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import MenuPage from "./pages/MenuPage";
import BackOfficePage from "./pages/BackOfficePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/backoffice" element={<BackOfficePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
