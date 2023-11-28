import React from "react";
import About from "../about/About";
import PostList from "../postsList/PostsList";
import cl from "./main.module.scss";

const Main = () => {
  return (
    <div className={cl.mainWrapper}>
      <About />
      <PostList />
    </div>
  );
};

export default Main;
