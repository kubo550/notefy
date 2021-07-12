import Link from "next/link";
import styled from "styled-components";
import { Container, Subtitle, Title, Button } from "styles";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 320px;
  padding: 10px 20px;
  margin: 5px 0;
  border: 2px dotted ${props => props.theme.colors.primary};
  border-radius: 21px;
`;

const Home = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title center>neotefy</Title>

      <Subtitle center>
        Create and share beautiful images of your source code. <br /> Start
        typing or drop a file into the text area to get started.
      </Subtitle>

      <Link href='/create' passHref>
        <Button>
          Create Note <AiOutlinePlusCircle size={22} />
        </Button>
      </Link>

      <Wrapper>steps</Wrapper>
    </Container>
  );
};

export default Home;
