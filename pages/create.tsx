import styled from "styled-components";
import { Button, Container, Subtitle, TextArea } from "styles";
import { useDataSave } from "hooks";
import { useState } from "react";
import { generatePassword } from "utils";
import * as S from "styles/pages/create.style";
import { useRouter } from "next/router";

const Content = styled.div`
  width: 100%;
`;

const passLength = 14;

const Create = () => {
  const [error, setError] = useState<null | string>(null);
  const [note, setNote] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const router = useRouter();
  const { dbErr, loading, saveData } = useDataSave("notes");

  const handleSaveData = async () => {
    setError("");

    if (note.length < 10) {
      return setError("Note must not be shorter than 10 chars");
    }

    const password = generatePassword(passLength);

    const id = await saveData({
      note,
      password,
    });
    if (dbErr) {
      console.log(dbErr);

      return;
    }
    setDisableButton(true);
    router.push({
      pathname: "/success",
      query: { id },
    });
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Content>
        <Subtitle> Create Note </Subtitle>
        {error && <S.ErrorContainer> {error} </S.ErrorContainer>}
        {dbErr && <S.ErrorContainer> {dbErr} </S.ErrorContainer>}

        <TextArea
          placeholder='Enter some text...'
          value={note}
          onChange={e => setNote(e.target.value)}
          rows={15}
          cols={65}
        />
        <Button disabled={loading || disableButton} onClick={handleSaveData}>
          {loading ? "Loading" : disableButton ? "creating..." : "create"}
        </Button>
      </Content>
    </Container>
  );
};

export default Create;
