import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>,
);
