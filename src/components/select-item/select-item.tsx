import CardItem from "../cardItem/cardItem";
import userSettingList from "../../config/userSettingList.json";
import style from "./select-item.module.scss";
import { useEffect, useState } from "react";

interface IProps {
  content: string;
  type: string;
}

const SelectItem: React.FC<IProps> = ({ content, type }) => {
  return type === "title" ? (
    <div className={style.title}> {content} </div>
  ) : (
    <div className={style.item}> {content} </div>
  );
};

export default SelectItem;
