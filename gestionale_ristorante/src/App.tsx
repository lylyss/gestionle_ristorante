import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import MenuPage from "./pages/MenuPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </>
  );
}

export default App;
