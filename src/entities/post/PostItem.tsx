import { FC } from "react";
import { Ipost } from "../../shared/types/post";
import cl from "./postItem.module.scss";
const MAX_CHARS_LIMIT = 200;

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
  const addZeroToID = (id: number) => {
    if (id >= 10) {
      return id;
    }
    return `0${id}`;
  };
  return (
    <article className={cl.postItemContainer}>
      <section className={cl.postItemContainerWrapper}>
        <h2>{post.title}</h2>
        <span>{addZeroToID(post.id)}</span>
      </section>
      <section>{contentLenghtEditor(bodyCharsLimit, post.body)}</section>
    </article>
  );
};
