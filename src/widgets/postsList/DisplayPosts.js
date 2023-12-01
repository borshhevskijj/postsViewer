import { useRef, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import PostCard from "../postCard/PostCard";
import "./displayPosts.scss";

const DisplayPosts = ({ posts }) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, [ref]);

  const buttonHandler = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <TransitionGroup className="postsContainer" component={"ul"}>
      {posts.map((post, index) => {
        const lastEl = posts.length - 1 === index;
        return (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <li ref={lastEl ? ref : null} key={post.id} className="post">
              <PostCard
                view="underline"
                post={post}
                onClick={() => buttonHandler(post.id)}
                children={"view more"}
                bodyCharsLimit={true}
                key={post.id}
              />
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default DisplayPosts;
