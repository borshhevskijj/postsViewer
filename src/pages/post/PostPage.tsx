import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../shared/components/button/Button";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPosts } from "../../shared/api/posts/postsSlice";
import { fetchPostById } from "../../shared/api/posts/postsThunk";
import UpdatePost from "../../features/updatePost/UpdatePost";
import Modal from "../../shared/components/modal/Modal";
import { Loader } from "../../shared/components/loader/Loader";
import cl from "./postPage.module.scss";
import PostPageCard from "../../widgets/postPageCard/PostPageCard";

const PostPage = () => {
  const { id } = useParams();
  const { post, status } = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPostById(Number(id)));
  }, [id]);

  if (status === "loading") {
    return <Loader size="Large" />;
  }
  if (status === "rejected") {
    return <p>error</p>;
  }
  if (!post) {
    return (
      <>
        <p>Posts empty</p>
        <Button view="underline" onClick={() => navigate(-1)} children={"Go back"} />
      </>
    );
  }
  return (
    <>
      {!!post && (
        <>
          <div className={cl.postCardWrapper}>
            <PostPageCard body={post.body} id={post.id} title={post.title} userId={post.userId} />
          </div>
        </>
      )}
    </>
  );
};

export default PostPage;
