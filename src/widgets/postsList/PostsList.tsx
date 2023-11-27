import React, { useCallback, useEffect, useState } from "react";
import { Ipost } from "../../shared/types/post";
import { PostItem } from "../../entities/post/PostItem";
import { Button } from "../../shared/components/button/Button";
import { Loader } from "../../shared/components/loader/Loader";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPosts } from "../../features/posts/postsSlice";
import { fetchPosts } from "../../features/posts/postsThunk";
import PostCard from "../../features/postCard/PostCard";

const PostList = () => {
  // const [currentPostStart, setCurrentPostStart] = useState(20);
  const { posts, error, status } = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts({ _limit: 0, _start: 0 }));
  }, []);
  // sessionStorage.clear();
  // useEffect(() => {
  //   document.addEventListener("scroll", scrollHandler);
  //   return () => {
  //     document.removeEventListener("scroll", scrollHandler);
  //   };
  // }, [posts]);

  // const scrollHandler = (e: Event) => {
  //   const target = e.target as Document;
  //   if (
  //     target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100 &&
  //     currentPostStart < limit!
  //   ) {
  //     setCurrentPostStart(currentPostStart + 10);
  //   }
  // };

  const buttonHandler = (id: number) => {
    navigate(`/posts/${id}`);
  };
  const clearStorage = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <main>
      <ul className="post__list">
        {!!posts.length &&
          posts.map((post) => {
            return (
              <li key={post.id}>
                <PostCard
                  post={post}
                  onClick={() => buttonHandler(post.id)}
                  children={"подробнее"}
                  bodyCharsLimit={true}
                  key={post.id}
                />
              </li>
            );
          })}
        {/* -------------------------------------- */}
        {/* {!posts.length && (
          <>
            <h2>Посты закончились, загрузить заново? </h2>
            <Button children={"загрузить заново"} onClick={() => clearStorage()} />
          </>
        )} */}
        {status === "loading" && <Loader size="Large" />}
      </ul>
    </main>
  );
};
export default PostList;
