import React, { useState } from "react";
import PostList from "../widgets/postsList/PostsList";
import PostPage from "../pages/post/PostPage";
import MainPage from "../pages/main/MainPage";
import { Route, Routes } from "react-router-dom";
import Modal from "../shared/components/modal/Modal";
import CreatePost from "../features/createPost/CreatePost";
import "./App.css";
import { Loader } from "../shared/components/loader/Loader";
function App() {
  // const [active, setActive] = useState(false);

  return (
    <div className="App">
      {/* <button className="modal_btn" onClick={() => setActive(true)}>
        Создать пост
      </button>
      <Modal active={active} setActive={setActive} children={<CreatePost modalStateSetter={setActive} />} /> */}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<MainPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/loader" element={<Loader size="Small" />} />
        <Route path="*" element={<p>Такой страницы не существует</p>} />
      </Routes>
    </div>
  );
}

export default App;
