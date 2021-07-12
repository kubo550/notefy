import { useState } from "react";
import { firestore } from "firestore";
import { Container } from "styles";
import type { GetServerSideProps } from "next";
import type { Note } from "types";

interface SuccessProps {
  id: string;
  note: Note;
  error: string | null;
}

const Success: React.FC<SuccessProps> = ({ id, note, error }) => {
  const [password, setPassword] = useState(note.password);

  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <p> notatka: {note.note} </p>

      <div>
        <h3>Twoja notatka jest gotowa do odczytu</h3>
      </div>

      <div>
        <label>
          Hasło do edycji
          <input
            type='text'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button>Save new Password</button>
      </div>
    </Container>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.query.id;
  let note: Note = {} as Note;
  let error: string | null = null;

  try {
    const snapshot = await firestore.collection("notes").get();
    const record = snapshot.docs.find(doc => doc.id === id);

    if (!record) {
      throw Error("Note Not Found");
    }

    note = record.data() as Note;
  } catch (err) {
    error = err.message;
  }

  return {
    props: { id, note, error },
  };
};
