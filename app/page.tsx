import React from "react";
import Header from "./components/Header";
import AdoptMe from "./components/AdoptMe";
import History from "./components/History";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <AdoptMe />
      <History />
      <Services />
    </main>
  );
}
