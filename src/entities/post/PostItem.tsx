import { FC } from "react";
import { Ipost } from "../../shared/types/post";
// import "./postItem.css";
const MAX_CHARS_LIMIT = 55;

const truncateTextAtLastSpace = (content: string) => {
  const slice = content.substring(0, MAX_CHARS_LIMIT);
  const lastSpaceIndex = slice.lastIndexOf(" ");
  if (lastSpaceIndex && content.length < MAX_CHARS_LIMIT) {
    return content;
  }
  const substringIndex = lastSpaceIndex === -1 ? MAX_CHARS_LIMIT : lastSpaceIndex;
  return `${content.substring(0, substringIndex)} ...`;
};
const contentLenghtEditor = (limit: boolean, content: string) => {
  if (limit) {
    return truncateTextAtLastSpace(content);
  }
  return content;
};

export interface PostItemProps {
  post: Ipost;
  bodyCharsLimit: boolean;
}

export const PostItem: FC<PostItemProps> = ({ post, bodyCharsLimit }) => {
  return (
    <article className="postItemContainer">
      <section className="postItemContainer__wrapper">
        <div>№{post.id}</div>
        <h2>Title: {post.title}</h2>
      </section>
      <section>Content: {contentLenghtEditor(bodyCharsLimit, post.body)}</section>
    </article>
  );
};
