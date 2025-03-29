import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import WebRoutes from "/src/routes/WebRoutes.jsx";
import Auth from "/src/auth/Auth";
import "/src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth>
      <BrowserRouter>
          <WebRoutes />
      </BrowserRouter>
    </Auth>
  </StrictMode>
);
