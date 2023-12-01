import PostPage from "../pages/post/PostPage";
import MainPage from "../pages/main/MainPage";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Loader } from "../shared/components/loader/Loader";
import Header from "../widgets/header/Header";
import Footer from "../widgets/footer/Footer";
function App() {
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
      <Footer />
    </div>
  );
}

export default App;
