import * as S from "./Alert.style";
import type { FC } from "react";

interface AlertProps {
  title: "link" | "password";
}

export const Alert: FC<AlertProps> = ({ title }) => (
  <S.Container
    initial={{ opacity: 0, y: -30, x: "-50%" }}
    animate={{ opacity: 1, y: 0, x: "-50%" }}
    exit={{ opacity: 0, y: 30, x: "-50%" }}
  >
    {title} copied to clipboard!
  </S.Container>
);
