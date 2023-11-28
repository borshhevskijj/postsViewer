import { Button } from "../../shared/components/button/Button";
const HeaderTitle = () => {
  return (
    <section>
      <div>
        <h6>Blog</h6>
        <Button children={"PUBLISH"} onClick={() => "ads"} />
      </div>
      <h2>
        I hope readers can <span>have fun</span> and find the right stuff for them!
      </h2>
    </section>
  );
};

export default HeaderTitle;
