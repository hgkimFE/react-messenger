import React from "react";
import "./styles/App.css";
import { LeftDrawer } from "./components/LeftDrawer";
import { MainPage } from "./components/MainPage";
function App() {
  return (
    <div className="App">
      <LeftDrawer />
      <MainPage />
    </div>
  );
}

export default App;
