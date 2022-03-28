import React from "react";
import AccordeonInfo from "../AccordeonInfo";
import * as S from "./index.styles";
import { CertificateProps } from "./index.types";

function Certificate({ fileSrc, imageSrc, imageAlt, info }: CertificateProps) {
  return (
    <S.Certificate>
      <S.CertificateImg src={imageSrc} alt={imageAlt} draggable={false} />
      <AccordeonInfo info={info} />
    </S.Certificate>
  );
}

export default Certificate;
