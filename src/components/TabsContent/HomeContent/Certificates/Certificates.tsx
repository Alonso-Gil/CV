import { CertificatesProps as Props } from "./Certificates.types";
import Styles from "./Certificates.styles";

import CertificationSVG from "assets/images/certification.svg";

const Certificates: React.FC<Props> = (props) => {
  return (
    <Styles className="Certificates">
      <div className="Certificates__personal-icon-container">
        <CertificationSVG className="Certificates__personal-icon" />
      </div>
      <p className="Certificates__title">Certificates</p>
      <p className="Certificates__sub-title">
        Scrum Foundation Professional Certificate
      </p>
      <p className="Certificates__date">(07/2021 - 08/2021)</p>
      <p className="Certificates__description">
        Certificate in the agile SCRUM methodology which accredits said
        knowledge for professional implementation at a theoretical and practical
        level.
      </p>
      <div className="Certificates__space" />
      <p className="Certificates__sub-title">TOEFL ITP </p>
      <p className="Certificates__date">(08/2021 - 09/2021)</p>
      <p className="Certificates__description">
        Presentation of the TOEFL ITP exam with a score of 540 points which
        supports the B1 level and almost the B2 level.
      </p>
    </Styles>
  );
};

Certificates.defaultProps = {};

export default Certificates;
