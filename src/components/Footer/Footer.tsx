import * as S from "./Footer.style";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <S.Container>
      <S.Text>
        © Jakub Kurdziel
        <a href='https://github.com/kubo550/notefy'>
          <AiFillGithub size={18} />
        </a>
      </S.Text>
      <S.Text>July 8, 2021</S.Text>
    </S.Container>
  );
};

export default Footer;
