import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error(
    'Root element not found. Make sure <div id="root"></div> exists in index.html.'
  );
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
