import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Add from "./components/Add";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Add />
  </StrictMode>,
);
