import React from "react";
import useNotaHooks from "./useNotaHooks";
import QRCode from "qrcode.react";
import Button from "../../../components/Button";
import ReactToPrint from "react-to-print";

function Nota() {
  const { form, today, urlQRPrefix, componentRef } =
    useNotaHooks();
  return (
    <>
      <div ref={componentRef} className="flex flex-col gap-2  p-3 w-full">
        <div className=" w-full flex flex-row justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-extrabold text-base">
              Flashindo Computer
            </h1>
            <p className="text-black text-xs">No WA : 0878-9451-7408</p>
            <p className="text-black text-xs">
              Jl D.I. Pandjaitan KM9 No 17-18
            </p>
          </div>
          <div>
            <p className="text-black text-xs">{today}</p>
          </div>
        </div>
        <div className=" mt-1 w-full flex flex-col gap-1">
          <h2 className="text-black font-bold text-sm self-center">
            Nota Service
          </h2>

          <div className="flex flex-row items-start justify-around">
            <table className="ml-5 mt-2 text-sm">
              <tr>
                <td className="text-black py-1 text-xs">Kode Service :</td>
                <td className="text-left self-start text-black font-bold py-2 text-xs">
                  {form.kode_task}
                </td>
              </tr>
              <tr>
                <td className="text-black py-1 text-xs">Nama Consumen :</td>
                <td className="text-left self-start text-black font-bold py-2 text-xs">
                  {form.nama_consumen}
                </td>
              </tr>
              <tr>
                <td className="text-black py-1 text-xs">
                  No Telpon Consumen :
                </td>
                <td className="text-left self-start text-black font-bold py-2 text-xs">
                  {form.no_telp_consumen}
                </td>
              </tr>
              <tr>
                <td className="text-black py-1 text-xs">Nama Barang :</td>
                <td className="text-left self-start text-black font-bold py-2 text-xs">
                  {form.nama_barang}
                </td>
              </tr>
              <tr className="align-middle">
                <td className="text-black py-1 text-xs">Service :</td>
                <td className="text-left self-start text-black font-bold py-2 text-xs">
                  {form.title}
                </td>
              </tr>
              <tr>
                <td className="text-black py-1 text-xs">
                  Deskripsi dan Kelengkapan :
                </td>
                <td className="text-left self-start w-3/4 text-black font-bold py-2 text-xs">
                  {form.deskripsi}
                </td>
              </tr>
            </table>
            <div className="flex flex-col gap-3 text-xs">
              <h3 className="text-black font-bold  ">Keterangan Lainnya</h3>
              <p>-------------------------</p>
              <p>-------------------------</p>
              <p>-------------------------</p>
              <p>-------------------------</p>
              <p>-------------------------</p>
              <p>-------------------------</p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between mt-10">
            <div className="flex flex-col items-start gap-2 text-xs ">
              <p className="font-bold">PERHATIAN : </p>
              <p>
                * Setiap pengambilan barang servisan wajib membawa nota atau
                surat servis ini.
              </p>
              <p>
                * Apabila nota atau surat servis ini hilang/rusak, pelanggan
                diwajibkan melampirkan foto copy KTP sesuai nama pada surat
                tercantum.
              </p>
              <p>
                * Barang Servisan lebih dari 3 bulan yang tidak diambil,
                rusak/hilang diluar tanggungjawab toko.
              </p>
              <p>
                * Kami tidak bertanggungjawab atas hilangnya data akibat dari
                virus & kerusakan Storage Device{" "}
                {"(harddisk, memory card, dll)"}
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h3 className="font-bold text-xs">Cek Status Service Anda :</h3>
              <QRCode value={`${urlQRPrefix}/${form.kode_task}`} />
              <p className="text-xs text-center">
                Atau gunakan kode service anda pada link <br />
                <span className="text-bluePrimary">
                  {import.meta.env.VITE_APP_SERVICE_CLIENT_URL}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <ReactToPrint
          trigger={() => <Button isPrimary>Print</Button>}
          content={() => componentRef.current}
        />
      </div>
    </>
  );
}

export default Nota;
