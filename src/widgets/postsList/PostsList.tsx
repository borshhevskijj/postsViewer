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
import PostCard from "../postCard/PostCard";
//
import cl from "./postList.module.scss";
import DisplayPosts from "./DisplayPosts";

const PostList = () => {
  // const [currentPostStart, setCurrentPostStart] = useState(20);
  const { posts, error, status } = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ _limit: 13, _start: 0 }));
  }, []);

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

  // const buttonHandler = (id: number) => {
  //   navigate(`/posts/${id}`);
  // };
  const clearStorage = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  // clearStorage();
  sessionStorage.clear();
  return (
    <main className={cl.main}>
      <DisplayPosts posts={posts} />
      {status === "loading" && <Loader size="Small" />}
    </main>
  );
};
export default PostList;
