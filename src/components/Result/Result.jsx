// Result.jsx
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  selectSize,
  selectSause,
  selectCheese,
  selectCategory,
  selectImage,
} from "../../selectors.js";

const Result = () => {
  const size = useSelector(selectSize);
  const sause = useSelector(selectSause);
  const cheese = useSelector(selectCheese);
  const category = useSelector(selectCategory);
  const image = useSelector(selectImage);

  const formatValue = (value) => {
    return typeof value === "object" ? JSON.stringify(value) : value;
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Configurator Summary", 14, 10);
    autoTable(doc, {
      startY: 20,
      head: [["Field", "Value"]],
      body: [
        ["Size", formatValue(size)],
        ["Sause", formatValue(sause)],
        ["Cheese", formatValue(cheese)],
        ["Category", formatValue(category)],
      ],
    });

    if (image) {
      doc.addImage(
        image,
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
      <pre>
        {JSON.stringify(
          {
            size,
            sause,
            cheese,
            category,
            image,
          },
          null,
          2
        )}
      </pre>
      <button onClick={downloadPDF}>Download PDF</button>
      <Link to={"/"}>Start over</Link>
    </>
  );
};

export default Result;
