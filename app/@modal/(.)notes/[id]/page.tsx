import { fetchNoteById } from '@/lib/api';
import NotePreview from './NotePreview.client';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreviewPage = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <NotePreview note={ note} />

  );
};

export default NotePreviewPage;