'use client'
import Billing from "./pages/billing/page";
import AppMenu from "./pages/shared/menu";
import Stock from "./pages/stock/page";

export default function Home() {
  return (
    <main>
      <AppMenu></AppMenu>
      <Billing></Billing>
    </main>
  );
}
