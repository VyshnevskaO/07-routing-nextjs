'use client'
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css"
import { Note } from "@/types/note";
import { useRouter } from "next/navigation";


type NotePreviewProps = {
    note: Note;
};

const NotePreviewClient = ({note}:NotePreviewProps) =>{
  const router = useRouter();

  const handleGoBack =()=>{
    const isSure = confirm('Are you sure you want leave the page');
    if(isSure){
        router.back();
    }
  }

  return(
    <Modal onClose={handleGoBack}>
    <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.date}>{note.updatedAt? note.updatedAt:note.createdAt}</p>
          <button className={css.backBtn} onClick={handleGoBack}>Close</button>
        </div>
     </div>
    </Modal>
  )
}

export default NotePreviewClient ;