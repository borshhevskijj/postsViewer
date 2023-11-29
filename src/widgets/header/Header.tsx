import Profile from "./Profile";
import cl from "./header.module.scss";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <header className={cl.header}>
      <HeaderTitle />
      <Profile />
    </header>
  );
};

export default Header;
