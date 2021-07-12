import { firestore } from "firestore";
import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import type { Note as NoteType } from "types";
import { Container } from "components/Navbar/Navbar.style";

interface NoteProps {
  note: NoteType;
  error: string;
}

const Note: React.FC<NoteProps> = ({ note, error }) => {
  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <div>
      <h2> Twoja notatka</h2>
      <p> {note.note} </p>
      <button> Edytuj </button>
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
    props: { note, error },
  };
};
