import { isTemplateSpan } from "typescript";
import CardItem from "../cardItem/cardItem";
import { CardItemType } from "../main/dataModel";
import mockItems from "./mockItems.json";
import style from "./card-item-list.module.scss";

interface IProps {
  items?: CardItemType[];
  origin?: string;
}

const CardItemList: React.FC<IProps> = ({ items = mockItems, origin }) => {
  return (
    <>
      <div className={style.title}>
        <span>Ideas for you</span>
      </div>
      <div
        className={
          origin === "main" ? style.mainCardItemContainer : style.container
        }
      >
        {items.map((item: any) => (
          <CardItem
            key={item.id}
            item={item}
            cardBoxSize={{
              width: "100%",
              paddingTop: "133%",
              borderRadius: 16,
            }}
          />
        ))}
      </div>
      <div className={style.subContainer}></div>
    </>
  );
};

export default CardItemList;

// array api
// map, filter, forEach  (iterating) take one element from a list
// filter - take data that meets a certain condition
// map - re-organizing the array (change the structure of data)
// ex) a = [1,2,3,4,5]  =>      a = a.map(e => e * 3) => [3, 6, 9 , 12, 15]
// In React, when dealing with a huge data, need a map api bc it returns changed data itself, whereas foreach not return
// jsx - rendering
