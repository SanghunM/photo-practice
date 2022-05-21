import CardItemList from "../card-item-list/card-item-list";
import CardItem from "../cardItem/cardItem";
import SearchHistory from "../search-history-list copy/search-history-list";
import style from "./modal.module.scss";

interface IProps {
  searchBoxWidth: number;
  searchBoxHeight: number;
}

const Modal: React.FC<IProps> = ({ searchBoxWidth, searchBoxHeight }) => (
  <>
    <div
      className={style.modalContainer}
      style={{
        width: searchBoxWidth,
        transform: `translateY(${searchBoxHeight}px)`,
      }}
    >
      <SearchHistory />
      <CardItemList />
    </div>
  </>
);

export default Modal;
