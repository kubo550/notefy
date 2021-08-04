import { useRouter } from "next/router";
import { useState } from "react";
import { firestore } from "firestore";
import { Container } from "components/Navbar/Navbar.style";
import { Button, Subtitle, TextArea } from "styles";
import type { GetServerSideProps } from "next";
import type { Note as NoteType } from "types";

interface NoteProps {
  note: NoteType;
  error: string;
  id: string;
}

const Note: React.FC<NoteProps> = ({ id, note, error }) => {
  const [text, setText] = useState(note.note);
  const [editing, setEditing] = useState(false);
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleStartEditing = () => {
    setEditing(true);
  };

  const handleSaveNote = async () => {
    try {
      await firestore.collection("notes").doc(id).update({ note: text });
      router.reload();
    } catch (e) { }
  };

  const incorrectPass = password !== note.password;

  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <div>
      <Subtitle center>Your note</Subtitle>

      {!editing ? (
        <>
          <p> {note.note} </p>
          <Button onClick={handleStartEditing}> Edit </Button>
        </>
      ) : (
        <>
          <TextArea
            value={text}
            onChange={e => setText(e.target.value)}
            rows={15}
            cols={65}
          />
          <Subtitle center> Enter password to edit this note </Subtitle>
          <input
            type='text'
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ marginBottom: '10px' }}
          />

          <Button placeholder="********" disabled={incorrectPass} onClick={handleSaveNote}>
            Save
          </Button>
          <Button onClick={() => setEditing(false)}> Cancel </Button>
        </>
      )}
    </div>
  );
};

export default Note;

export const getServerSideProps: GetServerSideProps = async context => {
  let note = {} as NoteType;
  let error: string | null = null;

  const id = context.params?.noteid;

  if (!id) {
    context.res.statusCode = 400;
    context.res.setHeader("location", "404");

    return {
      props: {},
    };
  }

  try {
    const snapshot = await firestore.collection("notes").get();
    const record = snapshot.docs.find(doc => doc.id === id);

    if (!record) {
      throw Error("Note Not Found");
    }

    note = record.data() as NoteType;
  } catch (err) {
    error = err.message;
  }

  return {
    props: { id, note, error },
  };
};
