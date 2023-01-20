import React from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import Menu from "./component/Menu";
import AppRoutes from "./routes";

function App() {
  return (
    <Routes>
      <Menu />
      <AppRoutes />
    </Routes>
  );
}

export default App;
