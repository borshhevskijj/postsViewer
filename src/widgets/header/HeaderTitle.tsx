import { useState } from "react";
import { Button } from "../../shared/components/button/Button";
import Modal from "../../shared/components/modal/Modal";
import CreatePost from "../../features/createPost/CreatePost";

const HeaderTitle = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <section>
        <div>
          <h6>Blog</h6>
          <Button view="colored" children={"PUBLISH"} onClick={() => setActive(true)} />
        </div>
        <h2>
          I hope readers can <span>have fun</span> and find the right stuff for them!
        </h2>
      </section>
      <Modal
        view="underline"
        active={active}
        setActive={setActive}
        children={<CreatePost modalStateSetter={setActive} />}
      />
    </>
  );
};

export default HeaderTitle;
