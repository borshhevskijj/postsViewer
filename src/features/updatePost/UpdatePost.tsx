import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { updatePost } from "../../shared/api/posts/postsThunk";
import { Ipost } from "../../shared/types/post";
import cl from "../formPost.module.scss";
import { Button } from "../../shared/components/button/Button";
import icon from "../../shared/icons/adminIcon.png";

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
  let isFirstCall = true;

  const closeModal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    modalStateSetter(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFirstCall) {
      dispatch(updatePost({ ...inputs, id })).then(() => closeModal(e));
      isFirstCall = false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setTimeout(() => {
      isFirstCall = true;
    }, 1000);
  }, [isFirstCall]);

  return (
    <div className={cl.formContent}>
      <h1>Update post</h1>
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
          value={inputs.title}
          onChange={handleChange}
        />
        <textarea
          className={cl.body}
          placeholder="Write something...."
          name="body"
          value={inputs.body}
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

export default UpdatePost;
