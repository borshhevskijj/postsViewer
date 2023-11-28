import cl from "./about.module.scss";
const About = () => {
  return (
    <section className={cl.about}>
      <h6>about</h6>
      <div className={cl.description}>
        <h2>let's get acquainted!</h2>
        <div>
          <span>
            Welcome to my personal blog! My name is John, and I created this blog as an online diary and creative outlet
            for sharing snippets of my life experiences, random musings, and eclectic interests.
          </span>
          <span>
            It's a casual, diary-style blog where I share my views and thoughts on topics such as daily life,
            books/media, humor, food, adventure, nature, and more. Thank you for reading!
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
