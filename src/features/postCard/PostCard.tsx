import React from "react";
import { PostItem, PostItemProps } from "../../entities/post/PostItem";
import { Button, ButtonProps } from "../../shared/components/button/Button";
import { useAppDispatch } from "../../app/hooks";
import { deletePostById } from "../posts/postsThunk";
type PostCardProps = PostItemProps & ButtonProps;

const PostCard: React.FC<PostCardProps> = ({ post, bodyCharsLimit, children, onClick }) => {
  const dispatch = useAppDispatch();

  const deletePost = (id: number) => {
    dispatch(deletePostById(id));
  };
  // const randNumb = () => {
  //   return Math.round(Math.random() * 1000);
  // };
  return (
    <div className="postCard">
      <PostItem post={post} bodyCharsLimit={bodyCharsLimit} />
      <Button onClick={onClick} children={children} />
      <div className="buttonsWrapper">
        {/* <Button onClick={()=> updatePost(post.id)} children={'updatePost'} /> */}
        <Button onClick={() => deletePost(post.id)} children={<span>&times;</span>} />
      </div>
      {/* <img style={{ maxWidth: 550 }} src={`https://random.imagecdn.app/600/300?${randNumb()}`} loading="lazy" alt="#" /> */}
    </div>
  );
};

export default PostCard;
