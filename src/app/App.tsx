import React, { useState } from "react";
import PostList from "../widgets/postsList/PostsList";
import PostPage from "../pages/post/PostPage";
import MainPage from "../pages/main/MainPage";
import { Route, Routes } from "react-router-dom";
import Modal from "../shared/components/modal/Modal";
import CreatePost from "../features/createPost/CreatePost";
import "./App.scss";
import { Loader } from "../shared/components/loader/Loader";
import Header from "../widgets/header/Header";
function App() {
  // const [active, setActive] = useState(false);

  return (
    <div className="App">
      <Header />

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
