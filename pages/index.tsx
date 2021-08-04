import Link from "next/link";
import { Container, Subtitle, Title, Button, Center } from "styles";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Steps } from "components";

const Home = () => (
  <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Title center>Neote-fy</Title>

    <Subtitle center>
      Create and share beautiful images of your source code.
      <br /> Start typing or drop a file into the text area to get started.
    </Subtitle>

    <Center>
      <Link href='/create' passHref>
        <Button>
          Create Note <AiOutlinePlusCircle size={22} />
        </Button>
      </Link>
    </Center>

    <Steps />
  </Container>
);

export default Home;
