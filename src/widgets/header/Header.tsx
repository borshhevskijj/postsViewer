import { Button } from "../../shared/components/button/Button";
import Profile from "./Profile";
import cl from "./header.module.scss";
const Header = () => {
  return (
    <header className={cl.header}>
      <section>
        <div>
          <h6>Blog</h6>
          <Button children={"PUBLISH"} onClick={() => "ads"} />
        </div>
        <h1>
          I hope readers can <span>have fun</span> and find the right stuff for them!
        </h1>
      </section>

      <Profile />
    </header>
  );
};

export default Header;
