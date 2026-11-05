import { FileEarmarkPersonFill, AwardFill, PatchCheckFill, MortarboardFill } from "react-bootstrap-icons";
import pdfFile from "../../assets/files/Aviv Glaser CV.pdf";
import { documents } from "../../utils/documents";
import { ILinks } from "../../utils/interfaces";

// Certificates first, the CV last
export const footerLinks: Array<ILinks> = [
  {
    href: documents.fullStackCertificate,
    icon: <AwardFill size={25} />,
    label: "Full Stack Certificate",
    hiddenText: "PDF file, opens in a new tab",
  },
  {
    href: documents.pmpCertification,
    icon: <PatchCheckFill size={25} />,
    label: "PMP® Certification",
    hiddenText: "PDF file, opens in a new tab",
  },
  {
    href: documents.baDegree,
    icon: <MortarboardFill size={25} />,
    label: "B.A. Degree",
    hiddenText: "PDF file, opens in a new tab",
  },
  {
    href: pdfFile,
    icon: <FileEarmarkPersonFill size={25} />,
    label: "Aviv Glaser, CSM CV",
    hiddenText: "PDF file, opens in a new tab",
  },
];
