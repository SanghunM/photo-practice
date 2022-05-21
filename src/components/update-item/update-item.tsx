import style from "./update-item.module.scss";
import { useEffect, useState } from "react";
import { Notification } from "../update-item-list/update-item-list";
import ButtonItem from "../buttonItem/buttonItem";

interface IProps {
  notification: Notification;
}

const NotificationItem: React.FC<IProps> = ({
  notification: { imageURL, userName, message },
}) => {
  return (
    <ButtonItem>
      <img className={style.img} src={imageURL} alt={userName} />
      <div className={style.description}>
        <span className={style.title}>{userName} </span> &nbsp;created an Idea
        Pin. {message}
      </div>
      <button className={style.button}>
        <i className="fa-solid fa-ellipsis"></i>
      </button>
    </ButtonItem>
  );
};

export default NotificationItem;
