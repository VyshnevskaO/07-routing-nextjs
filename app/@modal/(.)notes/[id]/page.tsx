import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";

type NotePreviewProps = {
    params: Promise<{id:string}>
};

const NotePreview = async({params}:NotePreviewProps) =>{
  const {id} = await params;
  const idNum = Number(id);
  const note = await fetchNoteById(idNum);
  

  return(
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.tag}</p>
       {note.updatedAt ?
       (<p>{note.updatedAt}</p>) : <p>{note.createdAt}</p>}
    </Modal>
  )
}

export default NotePreview ;