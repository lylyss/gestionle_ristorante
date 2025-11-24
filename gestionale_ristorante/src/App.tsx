import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import MenuPage from "./pages/MenuPage";
import BackOfficePage from "./pages/BackOfficePage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/backoffice" element={<BackOfficePage />} />
      </Routes>
    </>
  );
}

export default App;
