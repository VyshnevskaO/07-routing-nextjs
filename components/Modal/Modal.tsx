'use client'
import css from "./Modal.module.css"
import { createPortal } from "react-dom"
import { useCallback, useEffect } from "react";
import NoteForm from "../NoteForm/NoteForm";
import { useRouter } from "next/navigation";



interface ModalProps {
    onClose?: () => void;
    children?:React.ReactNode;
  }


export default function Modal({ onClose, children }: ModalProps) {
  const router = useRouter();

const close = useCallback(() => {
  if (onClose) {
    onClose();
  } else {
    router.back(); 
  }
}, [onClose, router]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          close();
        }
};
    
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
    };
  }, [close]);

    return createPortal(
        <div
            className={css.backdrop}
            role="dialog"
            aria-modal="true"
            onClick={handleBackdropClick}>
            <div className={css.modal}>
              {onClose? (
              <NoteForm onClose={()=> close()} />
              ):(<>{children}
             <button onClick={close}>Close</button>
              </>
                  
              )}
               
            </div>
        </div>,
        document.body
    );
  


}