export default function InvoiceFooter() {
  return (
    <div className="flex justify-end mt-20">
      <div className="flex justify-between w-96">
        <div>
          <p>Total Inclusão do IVA</p>
          <p>IVA (18%) Incluido em Total</p>
          <hr className="mt-4" />
          <p className="py-3 font-bold">Valor Devido</p>
          <hr className="mb-4" />
        </div>
        <div>
          <p>400.00</p>
          <p>400.00</p>
          <hr className="mt-4" />
          <p className="py-3 font-bold">400.00</p>
          <hr className="mb-4" />
        </div>
      </div>
    </div>
  );
}
