import React from "react";
import Modal from "../../shared/components/modal/Modal";
import UpdatePost from "./UpdatePost";

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
const UpdatePostModal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  return <>{/* <Modal active={} setActive={} children={}/> */}</>;
};

export default UpdatePostModal;
