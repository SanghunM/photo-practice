import React from "react";
import style from "./loader.module.scss";
import LoaderSVG from "./loader.svg";

const Loader: React.FC = () => {
  return (
    <div className={style.container}>
      <img src={LoaderSVG} alt="loader" />
    </div>
  );
};

export default Loader;
