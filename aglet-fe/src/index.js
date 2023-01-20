import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./assets/styles/main.css";

const AppComponent = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<AppComponent />, rootElement);
} else {
  render(<AppComponent />, rootElement);
}

