import styled from "styled-components";
import { Button, Container } from "styles";
import { useDataSave } from "hooks";
import { useState } from "react";
import { generatePassword } from "utils";

const Content = styled.div``;

const passLength = 14;

const Create = () => {
  const [error, setError] = useState<null | string>(null);
  const [note, setNote] = useState("");
  const [completed, setCompleted] = useState(false);

  const { dbErr, loading, saveData } = useDataSave("notes");

  const handleSaveData = async () => {
    setError("");

    if (note.length < 10) {
      return setError("Note must not be shorter than 10 chars");
    }

    const password = generatePassword(passLength);
    saveData({
      note,
      password,
    });
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Content>
        <h1> Create Note </h1>
        {error && <p> {error} </p>}
        {dbErr && <p> {dbErr} </p>}
        <textarea
          placeholder='Enter some text...'
          cols={70}
          rows={20}
          value={note}
          onChange={e => setNote(e.target.value)}
        />
        <Button disabled={loading} onClick={handleSaveData}>
          {loading ? "Loading" : "Save"}
        </Button>
      </Content>
    </Container>
  );
};

export default Create;
