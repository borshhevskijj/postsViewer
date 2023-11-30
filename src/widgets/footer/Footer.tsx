import TgIcon from "../../shared/icons/TgIcon";
import IgIcon from "../../shared/icons/IgIcon";
import cl from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={cl.footer}>
      <h5>Blog</h5>
      <div className={cl.wrapper}>
        <p>Newsletter</p>
        <div className={cl.socialNetwork}>
          <IgIcon />
          <TgIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
