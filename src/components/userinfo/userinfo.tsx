import React from "react";
import style from "./userinfo.module.scss";

export interface IUserInfo {
  name: string | undefined;
  type?: string | undefined;
  email?: string | undefined;
}

interface IProps extends IUserInfo {}

const UserInfo: React.FC<IProps> = ({ name, type, email }) => {
  return (
    <>
      <div className={style.title}> Currently in </div>
      <div className={style.container}>
        <div className={style.logo}>
          {name ? name.slice(0, 2).toUpperCase() : ""}
        </div>
        <div className={style.second}>
          <div className={style.name}> {name} </div>
          <div className={style.userType}> {type} </div>
          <div className={style.email}> {email} </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
