import CardItem from "../cardItem/cardItem";
import userSettingList from "../../config/userSettingList.json";
import userInfo from "../../config/userInfo.json";
import style from "./select-item-list.module.scss";
import { ReactElement, useEffect, useState } from "react";
import SelectItem from "../select-item/select-item";
import Loader from "../loader/loader";
import UserInfo, { IUserInfo } from "../userinfo/userinfo";
import { isJsxOpeningElement } from "typescript";

type UserSettingElement = {
  [key: string]: Array<string>;
};

interface UserSetting {
  itemList: UserSettingElement;
}

interface IState {
  userSetting: UserSetting;
  user: IUserInfo;
}

const SelectItemList: React.FC = () => {
  const [userSetting, setUserSetting] = useState<IState["userSetting"]>();
  const [user, setUser] = useState<IState["user"]>();
  useEffect(() => {
    setTimeout(() => {
      setUserSetting(userSettingList as UserSetting);
      setUser(userInfo);
    }, 1000);
  }, []);

  const renderUserSettingHelper = () => {
    const elementArray: ReactElement[] = [];
    if (userSetting) {
      const itemList = userSetting.itemList;
      const itemListKeys = Object.keys(itemList);
      let prevKey: string = "";
      itemListKeys.forEach((key: string) => {
        if (prevKey != key) {
          elementArray.push(
            <SelectItem key={key} content={key} type="title" />
          );
        }
        itemList[key].forEach((item: string) => {
          elementArray.push(
            <SelectItem key={item} content={item} type="item" />
          );
        });
      });
      return (
        <>
          <UserInfo name={user?.name} type={user?.type} email={user?.email} />
          {elementArray.map((element) => element)}
        </>
      );
    }
    return <Loader />;
  };

  return <div className={style.container}>{renderUserSettingHelper()} </div>;
};

export default SelectItemList;
