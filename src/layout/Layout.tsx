import { Footer, Navbar } from "components";
import * as S from "./Layout.style";

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <Navbar />

      <main> {children} </main>

      <Footer />
    </S.Container>
  );
};

export default Layout;
