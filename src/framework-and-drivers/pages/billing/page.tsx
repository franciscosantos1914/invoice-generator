'use client'
import InvoiceBody from "./children/body";
import InvoiceFooter from "./children/footer";
import InvoiceHeader from "./children/header";

export default function Billing() {
  return (
    <div className="w-[70rem] bg-white min-h-screen px-24 py-10">
      <InvoiceHeader></InvoiceHeader>
      <InvoiceBody></InvoiceBody>
      <InvoiceFooter></InvoiceFooter>
    </div>
  );
}
