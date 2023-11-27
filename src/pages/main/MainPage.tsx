import PostList from "../../widgets/postsList/PostsList";
import Modal from "../../shared/components/modal/Modal";
import { Button } from "../../shared/components/button/Button";
import { useState } from "react";
import CreatePost from "../../features/createPost/CreatePost";

const MainPage = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button className="modal_btn" onClick={() => setActive(true)}>
        Создать пост
      </button>
      <Modal active={active} setActive={setActive} children={<CreatePost modalStateSetter={setActive} />} />
      <PostList />
    </>
  );
};

export default MainPage;
