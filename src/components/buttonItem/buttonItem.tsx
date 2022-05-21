import React, { MouseEventHandler } from "react";
import style from "./buttonItem.module.scss";

interface IProps {
  styling?: any;
  onClick?: (event?: any | undefined) => void;
}

const ButtonItem: React.FC<IProps> = ({ children, styling, onClick }) => {
  return (
    <div className={style.navItem} style={styling} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonItem;
