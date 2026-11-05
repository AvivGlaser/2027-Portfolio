import { FileEarmarkPersonFill, AwardFill, PatchCheckFill, MortarboardFill } from "react-bootstrap-icons";
import pdfFile from "../../assets/files/Aviv Glaser CV.pdf";
import BA from "../../assets/img/B.A.jpeg";
import { ILinks } from "../../utils/interfaces";

// PDFs in public/; encodeURI turns the spaces in their names into %20
export const footerLinks: Array<ILinks> = [
  {
    href: encodeURI("/Aviv Glaser - Full Stack Certificate.pdf"),
    icon: <AwardFill size={25} />,
    label: "Full Stack Certificate",
    hiddenText: "PDF file, opens in a new tab",
  },
  {
    href: encodeURI("/PMP Certification - Aviv Glaser.pdf"),
    icon: <PatchCheckFill size={25} />,
    label: "PMP® Certification",
    hiddenText: "PDF file, opens in a new tab",
  },
  {
    href: pdfFile,
    icon: <FileEarmarkPersonFill size={25} />,
    label: "Aviv Glaser, CSM CV",
    hiddenText: "PDF file, opens in a new tab",
  },
  {
    href: BA,
    icon: <MortarboardFill size={25} />,
    label: "B.A. Degree",
    hiddenText: "image, opens in a new tab",
  },
];
