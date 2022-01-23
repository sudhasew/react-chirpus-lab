import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Main } from "./Main";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      {/* <Bubble></Bubble> */}
    </div>
  );
}

export default App;
