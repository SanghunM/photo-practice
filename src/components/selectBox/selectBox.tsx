import { MenuType } from "../search/search";
import SelectItemList from "../select-item-list/select-item-list";
import UpdateItemList from "../update-item-list/update-item-list";
import style from "./selectBox.module.scss";

interface IProps {
  width: number;
  searchBoxHeight: number;
  type: MenuType;
}

const SelectBox: React.FC<IProps> = ({ width, searchBoxHeight, type }) => {
  const renderList = () => {
    switch (type) {
      case MenuType.USER_INFO:
        return <SelectItemList />;

      case MenuType.NOTIFICATION:
        return <UpdateItemList />;
    }
  };

  return (
    <div
      className={style.modalContainer}
      style={{
        width: width,
        transform: `translateY(${searchBoxHeight}px)`,
      }}
    >
      {renderList()}
    </div>
  );
};

export default SelectBox;
