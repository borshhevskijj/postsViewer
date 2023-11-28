import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import PostCard from "../postCard/PostCard";
import "./displayPosts.scss";

const DisplayPosts = ({ posts }) => {
  const navigate = useNavigate();

  const buttonHandler = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <TransitionGroup className="postsContainer" component={"ul"}>
      {posts.map((post) => {
        return (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <li key={post.id} className="post">
              <PostCard
                post={post}
                onClick={() => buttonHandler(post.id)}
                children={"подробнее"}
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
