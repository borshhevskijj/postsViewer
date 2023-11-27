import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { updatePost } from "../posts/postsThunk";
import { Ipost } from "../../shared/types/post";
interface props {
  modalStateSetter: React.Dispatch<React.SetStateAction<boolean>>;
  post: Ipost;
}
const UpdatePost: React.FC<props> = ({ modalStateSetter, post: { body, id, title } }) => {
  const [inputs, setInputs] = useState({
    title,
    body,
  });
  const dispatch = useAppDispatch();
  const closeModal = () => {
    modalStateSetter(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updatePost({ ...inputs, id })).then(() => closeModal());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <h1>Изменить пост</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={inputs.title} onChange={handleChange} />
        </label>
        <label>
          Body:
          <input type="text" name="body" value={inputs.body} onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default UpdatePost;
