import Image from "next/image";
import * as S from "./Step.style";
import type { StepData } from "./Steps";
import type { FC } from "react";

export const Step: FC<StepData> = ({ description, step, image }) => {
  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Image width={120} height={120} src={image} alt={step} />
      <h2>{step}</h2>
      <p>{description}</p>
    </S.Container>
  );
};
