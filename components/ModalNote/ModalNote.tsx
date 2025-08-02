'use client';
import css from "./ModalNote.module.css";

type Props = {
  children: React.ReactNode;
   onClose: () => void;
};

const Modal = ({ children,onClose }: Props) => {
  
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={ css.modal}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;