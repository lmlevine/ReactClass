import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Namealt from "./School";
import Attend from "./School";
import Online from "./School";
import Lunch from "./Food"
import Ghosting from "./Ghost";
import Calc from "./Calculator"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calc />
  </StrictMode>
);
