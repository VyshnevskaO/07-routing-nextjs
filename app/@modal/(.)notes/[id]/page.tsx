import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css"
type NotePreviewProps = {
    params: Promise<{id:string}>
};

const NotePreview = async({params}:NotePreviewProps) =>{
  const {id} = await params;
  const idNum = Number(id);
  const note = await fetchNoteById(idNum);
  

  return(
    <Modal>
    <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.date}>{note.updatedAt? note.updatedAt:note.createdAt}</p>
        </div>
     </div>
    </Modal>
  )
}

export default NotePreview ;