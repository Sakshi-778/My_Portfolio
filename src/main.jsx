import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SkillsProvider from "./Context/SkillsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SkillsProvider>
      <App />
    </SkillsProvider>
  </BrowserRouter>
);
