import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { createPost } from "../posts/postsThunk";

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
      <h1>Создать пост</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={inputs.title || ""} onChange={handleChange} />
        </label>
        <label>
          Body:
          <input type="text" name="body" value={inputs.body || ""} onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default CreatePost;
