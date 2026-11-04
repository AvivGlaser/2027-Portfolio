import { FileEarmarkPersonFill, AwardFill } from "react-bootstrap-icons";
import pdfFile from "../../assets/files/Aviv Glaser CV.pdf";
import { ILinks } from "../../utils/interfaces";

export const footerLinks: Array<ILinks> = [
  {
    href: "https://www.linkedin.com/in/aviv-glaser-226656202/overlay/1734883343928/single-media-viewer/?profileId=ACoAADO1pr4Bbcy48f40WijHAWsNVbKCfphKkW8",
    icon: <AwardFill size={25} />,
    alt: "Full-Stack Web Development course Certificate",
    hiddenText:
      "Full-Stack Web Development course Certificate - External link to linkedin.com",
  },
  {
    href: pdfFile,
    icon: <FileEarmarkPersonFill size={25} />,
    alt: "My CV",
    hiddenText: "My CV - PDF file, opens in a new tab",
  },
];
