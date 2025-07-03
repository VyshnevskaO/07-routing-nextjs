import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import NotesClient from "./Notes.client";

type NotesByCategoryProps = {
    params: Promise<{ slug: string[] }>;
}
const NotesByCategory = async ({ params }: NotesByCategoryProps) => {
    const { slug } = await params;
    const category = slug[0] === "all" ? undefined : slug[0];
    const response = await fetchNotes({ page: 1, query: "", category: category });
    return (
        <div>
            <NotesClient initialData={response} />
            {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
        </div>
    )
}

export default NotesByCategory;