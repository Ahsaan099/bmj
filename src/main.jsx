import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// 👇 AOS initialization component
const InitAOS = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);
  return children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <InitAOS>
        <App />
      </InitAOS>
    </BrowserRouter>
  </StrictMode>
)