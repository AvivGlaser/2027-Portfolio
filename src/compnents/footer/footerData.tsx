import { FileEarmarkPersonFill, AwardFill } from "react-bootstrap-icons";
import pdfFile from "../../assets/files/Aviv Glaser CV.pdf";
import { ILinks } from "../../utils/interfaces";

export const footerLinks: Array<ILinks> = [
  {
    // In public/; encodeURI turns the spaces in the file name into %20
    href: encodeURI("/Aviv Glaser - Full Stack Certificate.pdf"),
    icon: <AwardFill size={25} />,
    alt: "Full-Stack Web Development course Certificate",
    hiddenText:
      "Full-Stack Web Development course Certificate - PDF file, opens in a new tab",
  },
  {
    href: pdfFile,
    icon: <FileEarmarkPersonFill size={25} />,
    alt: "My CV",
    hiddenText: "My CV - PDF file, opens in a new tab",
  },
];
