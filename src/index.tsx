import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReliableHvac } from "./screens/ReliableHvac";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ReliableHvac />
  </StrictMode>,
);
