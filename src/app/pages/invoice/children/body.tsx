export default function InvoiceBody() {
  return (
    <div>
      <div className="pt-10 flex gap-16">
        <div>
          <p className="font-medium pb-2">FATURAR/ENVIAR PARA:</p>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              className="h-8 w-[27rem] border-0 pl-3 ring-1 ring-gray-300 cursor-pointer"
              placeholder="Nome da Empresa"
            />
            <input
              type="text"
              className="h-8 w-[27rem] border-0 pl-3 ring-1 ring-gray-300 cursor-pointer"
              placeholder="Endereço da Empresa"
            />

            <input
              type="text"
              className="h-8 w-[27rem] border-0 pl-3 ring-1 ring-gray-300 cursor-pointer"
              placeholder="Nº de Identificação Fiscal (NIF)"
            />
          </div>
        </div>
        <div>
          <p className="font-medium pb-2">DE:</p>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              className="h-8 w-[27rem] border-0 pl-3 ring-1 ring-gray-300 cursor-pointer"
              placeholder="Nome da Empresa"
            />
            <input
              type="text"
              className="h-8 w-[27rem] border-0 pl-3 ring-1 ring-gray-300 cursor-pointer"
              placeholder="Endereço da Empresa"
            />
            <input
              type="text"
              className="h-8 w-[27rem] border-0 pl-3 ring-1 ring-gray-300 cursor-pointer"
              placeholder="Nº de Identificação Fiscal (NIF)"
            />
          </div>
        </div>
      </div>
      <div className="pt-12">
        <div className="relative overflow-x-auto ring-1 ring-gray-300">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-sky-100 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Descrição
                </th>
                <th scope="col" className="px-6 py-3">
                  Unidades (UN)
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Preço Unitário <br />
                  <span className="text-gray-400">(Inclusão do IVA)</span>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Montante <br />
                  <span className="text-gray-400">(Inclusão do IVA)</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Acções
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <textarea
                    cols={20}
                    rows={3}
                    className="ring-1 p-3 ring-gray-300 cursor-pointer"
                    placeholder="Descrição"
                  ></textarea>
                </th>
                <td className="px-6 pb-14">
                  <input
                    type="text"
                    className="h-8 w-24 ring-1 pl-3 ring-gray-300 cursor-pointer"
                    placeholder="UN"
                  />
                </td>
                <td className="px-6 pb-14">
                  <input
                    type="text"
                    className="h-8 w-32 ring-1 pl-3 ring-gray-300 cursor-pointer"
                    placeholder="Preço"
                  />
                </td>
                <td className="px-6 pb-14">
                  <input
                    type="text"
                    className="h-8 w-32 ring-1 pl-3 ring-gray-300 cursor-pointer"
                    placeholder="Montante"
                  />
                </td>
                <td className="flex items-center gap-1 px-6 py-4">
                  <button className="w-7 h-7 flex justify-center items-center rounded-full bg-sky-100 hover:bg-sky-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-7 h-7 flex justify-center items-center rounded-full hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">No</td>
                <td className="flex items-center gap-1 px-6 py-4">
                  <button className="w-7 h-7 flex justify-center items-center rounded-full bg-sky-100 hover:bg-sky-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-7 h-7 flex justify-center items-center rounded-full hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
