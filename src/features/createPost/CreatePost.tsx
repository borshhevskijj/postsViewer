import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { createPost } from "../posts/postsThunk";
import cl from "./createPost.module.scss";
import icon from "../../shared/icons/adminIcon.png";
import { Button } from "../../shared/components/button/Button";
type props = {
  modalStateSetter: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreatePost: React.FC<props> = ({ modalStateSetter }) => {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const dispatch = useAppDispatch();
  //   const [error,setError] = useState()
  const closeModal = () => {
    modalStateSetter(false);
    setInputs({
      title: "",
      body: "",
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPost(inputs)).then(() => closeModal());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    // console.log(inputs);
  };
  return (
    <>
      <h1>Create post</h1>
      <div className={cl.personalInfo}>
        <div>
          <img src={icon} alt="Avatar" />
        </div>
        <span>By Admin</span>
      </div>

      <form id={cl.createPost} onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={inputs.title || ""} onChange={handleChange} />
        </label>
        <label>
          Body:
          <input type="text" name="body" value={inputs.body || ""} onChange={handleChange} />
        </label>
        <div className={cl.buttonWrapper}>
          <Button children="SUBMIT" onClick={() => false} view="colored" type="submit" />
          <Button children="CLOSE" onClick={closeModal} view="colored" />
        </div>
      </form>
    </>
  );
};

export default CreatePost;
