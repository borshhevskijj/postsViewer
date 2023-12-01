import { useEffect, useRef } from "react";
import { Loader } from "../../shared/components/loader/Loader";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPosts } from "../../features/posts/postsSlice";
import { fetchPosts } from "../../features/posts/postsThunk";
import cl from "./postList.module.scss";
import DisplayPosts from "./DisplayPosts";

const PostList = () => {
  const { posts, error, status } = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ _limit: 20, _start: 0 }));
  }, []);

  if (!posts.length) {
    return <h3> posts is empty</h3>;
  }
  return (
    <main className={cl.main}>
      <DisplayPosts posts={posts} />
      {status === "loading" && <Loader size="Large" />}
      {!!error && <h3 style={{ textAlign: "center" }}>ERROR</h3>}
    </main>
  );
};
export default PostList;
