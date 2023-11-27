import React from "react";
import "../modal/modal.scss";
import { Button } from "../button/Button";
// import CreatePost from "../../../features/createPost/CreatePost";
interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <Button onClick={() => setActive(false)} children={<span>&times;</span>} />
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {/* <CreatePost modalStateSetter={setActive} /> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
