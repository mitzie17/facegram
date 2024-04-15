// This is the starting point of the application

import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  /* By wrapping BrowserRouter around App, it controls the routing for the entire application */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
