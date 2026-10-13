import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import FloatingActions from "./components/FloatingActions/FloatingActions";

function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <header>
        <Navbar />
      </header>
      <main id="contenido" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;
