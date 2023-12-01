import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { createPost } from "../posts/postsThunk";
import cl from "../formPost.module.scss";
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={cl.formContent}>
      <h1>Create post</h1>
      <div className={cl.personalInfo}>
        <div>
          <img src={icon} alt="Avatar" />
        </div>
        <span>By Admin</span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className={cl.title}
          placeholder="title"
          type="text"
          name="title"
          value={inputs.title || ""}
          onChange={handleChange}
        />
        <textarea
          className={cl.body}
          placeholder="Write something...."
          name="body"
          value={inputs.body || ""}
          onChange={handleChange}
        />
        <div className={cl.buttonWrapper}>
          <Button children="SUBMIT" onClick={() => false} view="colored" type="submit" />
          <Button children="CLOSE" onClick={closeModal} view="transparent" />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
