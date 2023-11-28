import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { PostItem } from "../../entities/post/PostItem";
import { Button } from "../../shared/components/button/Button";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPosts } from "../../features/posts/postsSlice";
import { fetchPostById } from "../../features/posts/postsThunk";
import PostCard from "../../widgets/postCard/PostCard";
import UpdatePost from "../../features/updatePost/UpdatePost";
import Modal from "../../shared/components/modal/Modal";
import { Loader } from "../../shared/components/loader/Loader";
// import Loader from '../../shared/loader/Loader';

const PostPage = () => {
  const { id } = useParams();
  const { post, status } = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(fetchPostById(Number(id)));
  }, [id]);

  if (status === "loading") {
    return <Loader size="Large" />;
  }
  if (status === "rejected") {
    return <p>Какая-то ошибка</p>;
  }
  if (!post) {
    return (
      <>
        <p>Постов нет! Пусто..</p>
        <Button onClick={() => navigate("/")} children={"На главную"} />
      </>
    );
  }
  return (
    <>
      {!!post && (
        <>
          <PostCard post={post} bodyCharsLimit={false} onClick={() => navigate("/")} children={"На главную"} />
          <button className="modal_btn" onClick={() => setActive(true)}>
            Изменить пост
          </button>
          <Modal
            active={active}
            setActive={setActive}
            children={<UpdatePost modalStateSetter={setActive} post={post} />}
          />
        </>
      )}
    </>
  );
};

export default PostPage;
