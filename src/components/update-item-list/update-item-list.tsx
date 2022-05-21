import userSettingList from "../../config/userSettingList.json";
import userInfo from "../../config/userInfo.json";
import style from "./update-item-list.module.scss";
import { ReactElement, useEffect, useState } from "react";
import SelectItem from "../select-item/select-item";
import Loader from "../loader/loader";
import updateInfo from "../../config/notificationData.json";
import UserInfo, { IUserInfo } from "../userinfo/userinfo";
import NotificationItem from "../update-item/update-item";

export interface Notification {
  imageURL: string;
  userName: string;
  message: string;
}

interface IState {
  notification: Array<Notification> | undefined;
}

const UpdateItemList: React.FC = () => {
  const [notification, setNotification] = useState<IState["notification"]>();

  useEffect(() => {
    setTimeout(() => {
      setNotification(updateInfo.notifications as [Notification]);
    }, 1000);
  }, []);

  const renderNotifications = () => {
    if (notification) {
      return notification.map((notification) => (
        <NotificationItem
          key={notification.imageURL}
          notification={notification}
        />
      ));
    }
    <div></div>;
  };

  return <div className={style.container}>{renderNotifications()} </div>;
};

export default UpdateItemList;
