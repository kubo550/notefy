import { useState } from "react";
import { firestore } from "firestore";
import { Container, Subtitle } from "styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GrCopy } from "react-icons/gr";
import type { GetServerSideProps } from "next";
import type { Note } from "types";
import * as S from "styles/pages/succes.style";

interface SuccessProps {
  id: string;
  note: Note;
  error: string | null;
}

const Success: React.FC<SuccessProps> = ({ id, note, error }) => {
  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Subtitle center>Your Note is online</Subtitle>

      <div>
        <S.CopyContainer>
          <S.RLink href={`/note/${id}`}>{`note/${id}`}</S.RLink>

          <CopyToClipboard text={`http://localhost:3000/note/${id}`}>
            <button>
              <GrCopy />
            </button>
          </CopyToClipboard>
        </S.CopyContainer>

        <S.Hr />

        <Subtitle center>Password to editing note</Subtitle>

        <S.CopyContainer>
          <span> {note.password} </span>

          <CopyToClipboard text={note.password} onCopy={() => {}}>
            <S.CopyBtn>
              <GrCopy />
            </S.CopyBtn>
          </CopyToClipboard>
        </S.CopyContainer>
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
