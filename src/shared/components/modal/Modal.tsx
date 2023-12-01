import React from "react";
import "../modal/modal.scss";
import { Button } from "../button/Button";
import RemoveIcon from "../../icons/RemoveIcon";
interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  view: "colored" | "underline" | "transparent";
}
const Modal: React.FC<ModalProps> = ({ active, setActive, children, view }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content_buttonWrapper">
          <Button view={view} onClick={() => setActive(false)} children={<RemoveIcon />} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
