import React from "react";
import { PostItem, PostItemProps } from "../../entities/post/PostItem";
import { Button, ButtonProps } from "../../shared/components/button/Button";
import { useAppDispatch } from "../../app/hooks";
import { deletePostById, updatePost } from "../../shared/api/posts/postsThunk";
import cl from "./postCard.module.scss";
import icon from "../../shared/icons/adminIcon.png";
import RemoveIcon from "../../shared/icons/RemoveIcon";

type PostCardProps = PostItemProps & ButtonProps;

const PostCard: React.FC<PostCardProps> = ({ post, bodyCharsLimit, children, onClick, view }) => {
  const dispatch = useAppDispatch();

  const deletePost = (id: number) => {
    dispatch(deletePostById(id));
  };
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
        </div>
        <data>26/11/2023</data>
      </div>

      <PostItem post={post} bodyCharsLimit={bodyCharsLimit} />

      <div className={cl.buttonWrapper}>
        <Button children={children} onClick={onClick} view={view} />
      </div>
    </>
  );
};

export default PostCard;
