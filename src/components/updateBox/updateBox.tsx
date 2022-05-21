import UpdateItemList from "../update-item-list/update-item-list";
import style from "./updateBox.module.scss";

interface IProps {
  width: number;
  searchBoxHeight: number;
}

const UpdateBox: React.FC<IProps> = ({ width, searchBoxHeight }) => (
  <div
    className={style.modalContainer}
    style={{
      width: width,
      transform: `translateY(${searchBoxHeight}px)`,
    }}
  >
    <UpdateItemList />
  </div>
);

export default UpdateBox;
