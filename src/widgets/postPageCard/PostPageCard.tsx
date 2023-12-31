import React, { useEffect, useState } from "react";
import { PostItem } from "../../entities/post/PostItem";
import { Button } from "../../shared/components/button/Button";
import { useAppDispatch } from "../../app/hooks";
import { deletePostById, updatePost } from "../../shared/api/posts/postsThunk";
import icon from "../../shared/icons/adminIcon.png";
import RemoveIcon from "../../shared/icons/RemoveIcon";
import { Ipost } from "../../shared/types/post";
import { useNavigate } from "react-router-dom";
import Modal from "../../shared/components/modal/Modal";
import UpdatePost from "../../features/updatePost/UpdatePost";
import cl from "../postCard/postCard.module.scss";
import UpdateIcon from "../../shared/icons/UpdateIcon";
// костыль

const PostPageCard: React.FC<Ipost> = (post) => {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let isFirstCall = true;

  const deletePost = (id: number) => {
    if (isFirstCall) {
      dispatch(deletePostById(id));
      isFirstCall = false;
    }
  };
  const updPost = (post: Ipost) => {
    if (isFirstCall) {
      setActive(true);
      dispatch(updatePost(post));
      isFirstCall = false;
    }
  };
  useEffect(() => {
    setTimeout(() => {
      isFirstCall = true;
    }, 1000);
    console.log(isFirstCall);
  }, [isFirstCall]);

  return (
    <>
      <div className={cl.postInfo}>
        <div className={cl.postInfoPerson}>
          <div>
            <img src={icon} alt="Avatar" />
          </div>
          <span>By Admin</span>
          <span className={cl.deleteIcon} onClick={() => deletePost(post.id)}>
            <RemoveIcon />
          </span>
          <span onClick={() => updPost(post)}>
            <UpdateIcon />
          </span>
        </div>
        <data>26/11/2023</data>
      </div>

      <PostItem post={post} bodyCharsLimit={false} />

      <div className={cl.buttonWrapper}>
        <Button onClick={() => navigate("/")} children={"Go home"} view={"underline"} />
      </div>

      {active && (
        <Modal
          active={active}
          setActive={setActive}
          view="underline"
          children={<UpdatePost modalStateSetter={setActive} post={post} />}
        />
      )}
    </>
  );
};
export default PostPageCard;
