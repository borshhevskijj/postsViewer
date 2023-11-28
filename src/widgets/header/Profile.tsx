import cl from "./profile.module.scss";
import icon from "../../shared/icons/adminIcon.png";
const Profile = () => {
  return (
    <section className={cl.profile}>
      <div className={cl.head}>
        <button>READ</button>
        <div className={cl.headInfo}>
          <span>Admin</span>
          <div>
            <img src={icon} alt="Avatar" />
          </div>
        </div>
      </div>
      <div className={cl.imgWrapper}>
        <img src={`https://random.imagecdn.app/1920/1080`} loading="lazy" alt="#" />
      </div>
    </section>
  );
};

export default Profile;