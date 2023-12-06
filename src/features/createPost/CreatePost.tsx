import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { createPost } from "../../shared/api/posts/postsThunk";
import cl from "../formPost.module.scss";
import icon from "../../shared/icons/adminIcon.png";
import { Button } from "../../shared/components/button/Button";
type props = {
  modalStateSetter: React.Dispatch<React.SetStateAction<boolean>>;
};
type errors = {
  errorMessage: string;
  errorClassName: string;
};

const CreatePost: React.FC<props> = ({ modalStateSetter }) => {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState<errors>({
    errorMessage: "",
    errorClassName: "",
  });
  const dispatch = useAppDispatch();
  let isFirstCall = true;

  const closeModal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError({
      errorMessage: "",
      errorClassName: "",
    });
    modalStateSetter(false);
    setInputs({
      title: "",
      body: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFirstCall) {
      if (inputs.body.trim() === "" || inputs.title.trim() === "") {
        setError({
          errorMessage: "empty input",
          errorClassName: cl.emptyInput,
        });

        setTimeout(() => {
          setError({
            errorMessage: "",
            errorClassName: "",
          });
        }, 4000);

        return;
      }
      dispatch(createPost(inputs)).then(() => closeModal(e));
      isFirstCall = false;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      isFirstCall = true;
    }, 1000);
  }, [isFirstCall]);

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
          placeholder={`${!!error.errorMessage ? error.errorMessage : "title"}`}
          type="text"
          name="title"
          value={inputs.title || ""}
          onChange={handleChange}
        />
        <textarea
          className={cl.body}
          placeholder={`${!!error.errorMessage ? error.errorMessage : "Write something...."}`}
          name="body"
          value={inputs.body || ""}
          onChange={handleChange}
        />
        <div className={cl.buttonWrapper}>
          <Button children="SUBMIT" onClick={() => false} view="colored" type="submit" />
          <Button children="CLOSE" onClick={(e) => closeModal(e)} view="transparent" />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
