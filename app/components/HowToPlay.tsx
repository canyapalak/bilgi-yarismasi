import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalInterface } from "../types";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function HowToPlayModal({ open, setOpen }: ModalInterface) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} className="modal-main">
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           border-2 border-neutral-600 shadow-md rounded-lg outline-none flex flex-col w-4/6 md:w-3/6 lg:w-2/6 modal-box"
        >
          <HighlightOffIcon
            className="ml-auto mr-1 mt-1 cursor-pointer text-3xl hover:text-gray-default"
            onClick={handleClose}
          />
          <div
            className="border-dashed 
      border-spacing-20 border-4 border-neutral-600 rounded-xl w-4/5 ml-auto mr-auto mb-8 mt-2 modal-dash"
          >
            <div className="flex flex-col items-center p-3">
              <p className="text-neutral-700 fade-in break-words text-center text-lg">
                Bu bir bilgi yarışmasıdır. Seçtiğin kategoride sana 10 soru
                sorulacak ve doğru cevabı bulmaya çalışacaksın. Yarışma sonunda
                kaç soruyu doğru cevapladığını öğrenebilir ve Türk kültüründe
                önemli olan hayvanlardan hangisi olduğunu görebilirsin.
              </p>
              <br />
              <p className="text-neutral-700 fade-in break-words text-center text-lg font-extrabold">
                İyi oyunlar!
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
