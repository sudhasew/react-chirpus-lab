import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
