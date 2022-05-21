import ButtonItem from "../buttonItem/buttonItem";
import style from "./searchItem.module.scss";

interface IProps {
  keyword: string;
}

const SearchHistoryItem: React.FC<IProps> = ({ keyword }) => {
  return (
    <ButtonItem styling={{ backgroundColor: "aqua", display: "flex" }}>
      {keyword}
    </ButtonItem>
  );
};

export default SearchHistoryItem;
