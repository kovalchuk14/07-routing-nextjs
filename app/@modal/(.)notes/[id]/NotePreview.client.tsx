import ModalNote from "@/components/ModalNote/ModalNote"
import { Note } from "@/types/note";

type Props = {
    note: Note;
};

const NotePreview = async ({ note }: Props) => {
  return (
      <ModalNote>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
    </ModalNote>

  );
};

export default NotePreview;