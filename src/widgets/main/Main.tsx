import About from "../about/About";
import PostList from "../postsList/PostsList";
import cl from "./main.module.scss";

const Main = () => {
  sessionStorage.clear();
  return (
    <div className={cl.mainWrapper}>
      <About />
      <PostList />
    </div>
  );
};

export default Main;
