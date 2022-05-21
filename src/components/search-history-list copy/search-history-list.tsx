import { useContext } from "react";
import { SearchHistoryContext } from "../../context/search-history-context";
import ButtonItem from "../buttonItem/buttonItem";
import SearchHistoryItem from "../searchHistoryItem/searchItem";
import style from "./search-history-list.module.scss";

const SearchHistory = () => {
  const { historylist, setHistorylist } = useContext(SearchHistoryContext);

  const renderHistoryItem = () =>
    historylist.map((keyword) => (
      <SearchHistoryItem key={keyword} keyword={keyword} />
    ));

  const getHistory = () => {
    if (historylist) {
      for (let item of historylist) {
        <SearchHistoryItem keyword={item} />;
      }
    }
  };

  const clicklistner = () => {
    setHistorylist([]);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <span>Recent Searches</span>
        <ButtonItem
          styling={{
            padding: "0.5rem",
            borderRadius: "50%",
            marginLeft: "0,5rem",
          }}
        >
          <i className="fa-solid fa-circle-xmark" onClick={clicklistner}></i>
        </ButtonItem>
      </div>

      <div className={style.historyContainer}>{renderHistoryItem()}</div>
    </div>
  );
};

export default SearchHistory;
