import React from "react";
import Header from "../components/Header";
import Wallet from "./components/Wallet";
import RecentPurchases from "./components/RecentPurchases";

export default function MyDogs() {
  return (
    <main>
      <Header />
      <Wallet />
      <RecentPurchases />
    </main>
  );
}