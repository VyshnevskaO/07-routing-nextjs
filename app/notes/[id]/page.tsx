import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

type Props = {
    params:Promise<{id:string}>
}
 
const NoteDetails = async ({ params }: Props) => {
    const { id } = await params;
    const queryClient = new QueryClient();
    const idNum = parseInt(id, 10);
    await queryClient.prefetchQuery({
        queryKey: ['note', idNum],
        queryFn: () => fetchNoteById(idNum),
    })
    return (
     <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient /> 
    </HydrationBoundary>
        
    )
};


    export default  NoteDetails
  