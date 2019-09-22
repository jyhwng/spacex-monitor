import React from "react";
import { Launches } from "./components/Launches";
import { Container } from "./components/Container";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container leftComp={<Filters />} rightComp={<Launches />} />
    </>
  );
}

export default App;
