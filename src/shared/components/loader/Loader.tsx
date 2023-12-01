import cl from "./loader.module.scss";
interface props {
  size: "Small" | "Medium" | "Large";
}
export const Loader: React.FC<props> = ({ size }) => {
  return (
    <div className={cl.loaderContainer}>
      <span className={`${cl.loader} ${cl[size]}`}></span>
    </div>
  );
};
