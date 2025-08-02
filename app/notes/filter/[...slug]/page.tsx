import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
  q?: string,
  page?: string,
};

async function App({ params,q,page }: Props) {
  const { slug } = await params;
  const category = slug[0] === 'All' ? undefined : slug[0];
  const searchQuery = q ?? "";
  const currentPage = Number(page) || 1;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", searchQuery,category, currentPage ],
    queryFn: () => fetchNotes(searchQuery, category, currentPage),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialPage={currentPage} initialSearch={ searchQuery} tag={category} />
    </HydrationBoundary>
  );
}

export default App
