// components/Result.jsx
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Result = () => {
  const state = useSelector((state) => state);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Pizza Order Summary", 14, 10);
    autoTable(doc, {
      startY: 20,
      head: [["Field", "Value"]],
      body: [
        ["Base", state.base],
        ["Crust", state.crust],
        ["Sause", state.sause],
        ["Cheese", state.cheese],
        ["Category", state.category],
        ["Name Product", state.nameProduct],
        ["Quantity", state.quantity],
        ["Price", state.price],
        ["Description", state.description],
      ],
    });

    if (state.image) {
      doc.addImage(
        state.image,
        "JPEG",
        15,
        doc.autoTable.previous.finalY + 10,
        50,
        50
      );
    }

    doc.save("order_summary.pdf");
  };

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={downloadPDF}>Download PDF</button>
      <Link to={"/"}>Start over</Link>
    </>
  );
};

export default Result;
