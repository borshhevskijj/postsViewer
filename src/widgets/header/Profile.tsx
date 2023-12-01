import cl from "./profile.module.scss";
import icon from "../../shared/icons/adminIcon.png";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <section className={cl.profile}>
      <div className={cl.head}>
        <h3>Welcome</h3>
        <div className={cl.headInfo}>
          <span>Admin</span>
          <div>
            <img src={icon} alt="Avatar" />
          </div>
        </div>
      </div>
      <div className={cl.imgWrapper}>
        <img src={`https://random.imagecdn.app/1920/1080`} alt="random image" />
      </div>
    </section>
  );
};

export default Profile;
