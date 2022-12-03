import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

// React 18 syntax (instead of ReactDom.render)
const root = createRoot(document.getElementById("root"));
root.render(<App />);
