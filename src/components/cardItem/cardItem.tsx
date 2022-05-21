import { Dispatch, SetStateAction } from "react";
import { CardItemType } from "../main/dataModel";
import OverlayBox from "../overlay-box/overlay-box";

import style from "./cardItem.module.scss";

interface IProps {
  item: CardItemType;
  cardBoxSize?: {
    width: number | string;
    paddingTop: number | string;
    borderRadius?: number;
    url?: string;
  };
}

const CardItem: React.FC<IProps> = ({
  item,
  cardBoxSize = {
    width: "200px",
    paddingTop: "300px",
    borderRadius: 16,
    url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
}) => {
  console.log({ item });
  return (
    <div
      className={style.container}
      style={{
        backgroundImage: `url(${item.urls.raw})`,
        width: cardBoxSize.width,
        paddingTop: cardBoxSize.paddingTop,
        borderRadius: cardBoxSize.borderRadius,
      }}
    >
      {/* <input type="text" className={style.subItem}>
        save
      </input> */}
      <OverlayBox
        cardBoxSize={{
          width: cardBoxSize.width,
          paddingTop: cardBoxSize.paddingTop,
          borderRadius: cardBoxSize.borderRadius,
        }}
        origin="card"
      />
    </div>
  );
};

export default CardItem;
