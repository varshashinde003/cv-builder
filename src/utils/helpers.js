import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { white } from "./colors";

export const downloadPdfDocument = (rootElementId) => {
  const input = document.getElementById(rootElementId);
  html2canvas(input).then((canvas) => {
    var doc = new jsPDF();

    doc.html(input, {
      callback: function (doc) {
        console.log(doc);
        doc.save();
      },
      autoPaging: true,
      x: 10,
      y: 10,
      width: 200,
      height: 800,
      imageType: "jpeg",
      backgroundColor: white,
      windowWidth: 700,
      windowHeight: 935,
      scrollX: 0,
      scrollY: 0,
    });
  });
};
