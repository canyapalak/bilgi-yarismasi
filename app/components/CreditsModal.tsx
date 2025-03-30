import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { ModalInterface } from "../types";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HomeRounded from "@mui/icons-material/HomeRounded";
import turkiyeFlag from "@/public/assets/flag.png";

export default function CreditsModal({ open, setOpen }: ModalInterface) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} className="modal-main">
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           border-2 border-neutral-600 shadow-md rounded-lg outline-none flex flex-col w-[21rem] sm:w-[26rem] modal-box"
        >
          <HighlightOffIcon
            className="button ml-auto mr-1 mt-1 cursor-pointer text-3xl hover:text-gray-default"
            onClick={handleClose}
          />
          <div
            className="border-dashed 
      border-spacing-20 border-4 border-neutral-600 rounded-xl w-4/5 ml-auto mr-auto mb-8 mt-2 modal-dash"
          >
            <div className="p-4 flex flex-col justify-center items-center">
              <Image
                src={turkiyeFlag}
                alt="Türkiye-Bayrak"
                className="w-8 h-8 mr-auto ml-auto"
              />
              <p className="header text-xl mt-2 font-bold text-center">
                T.C. Berlin Başkonsolosluğu
              </p>
              <p className="header text-xl font-bold text-center">
                Eğitim Ataşeliği
              </p>
              <p className="text-red-600 text-md text-center mt-2 mb-10">
                &quot;Bir Yıldız, Bir Hilal, İlelebet İstiklal&quot; Bilgi
                Yarışması
              </p>
              <p className="text-md">2025</p>
              <p className="text-md">Versiyon: 1.1</p>
              <div className="flex flex-row gap-1">
                <p className="text-md italic text-center mt-2 text-gray-default">
                  Tüm hakları T.C. Berlin Başkonsolosluğu Eğitim Ataşeliğinde
                  saklıdır.
                </p>
              </div>
              <div className="text-black hover:text-mustard-default flex flex-row mt-4">
                <a
                  target="_blank"
                  href="https://berlin.meb.gov.tr/"
                  title="Eğitim Ataşeliği Sayfası"
                  className="flex items-center gap-1"
                >
                  <HomeRounded className="text-xl cursor-pointer" />
                  <p className="text-sm text-center">
                    Eğitim Ataşeliği Ana Sayfası
                  </p>
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
