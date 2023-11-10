import Invoice from "./pages/invoice/invoice";
import Menu from "./pages/shared/menu";
import Stock from "./pages/stock/stock";

export default function Home() {
  return (
    <main>
      <Menu></Menu>
      <Invoice></Invoice>
    </main>
  );
}
