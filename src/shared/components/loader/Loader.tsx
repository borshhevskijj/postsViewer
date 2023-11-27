// import "./loader.scss";
import cl from "./loader.module.scss";
interface props {
  size: "Small" | "Medium" | "Large";
}
export const Loader: React.FC<props> = ({ size }) => {
  return (
    <div className="loaderContainer">
      <span className={`${cl.loader} ${cl[size]}`}></span>
      {/* {size === "Small" && <span>Loading...</span>} */}
    </div>
  );
};
