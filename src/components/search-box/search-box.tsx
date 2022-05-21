import { format } from "path/win32";
import React, {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createSecureContext } from "tls";
import { ModalContext } from "../../context/modalContext";
import { SearchHistoryContext } from "../../context/search-history-context";
import Modal from "../modal/modal";
import OverlayBox from "../overlay-box/overlay-box";
import SearchHistory from "../search-history-list copy/search-history-list";
import style from "./search-box.module.scss";

interface IState {
  searchBox: { width: number; height: number };
  searchList: [];
}

const SearchBox = () => {
  let isDone: boolean;

  let timeoutRef;
  const searchRef = useRef<HTMLInputElement>(null);
  const { isOpenModal, setOpenModal, setSelectBox } = useContext(ModalContext);
  const [searchBox, setSearchBoxWidth] = useState<IState["searchBox"]>({
    width: 0,
    height: 0,
  });
  const { historylist, setHistorylist } = useContext(SearchHistoryContext);

  const clickListner = () => {
    setOpenModal(true);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (searchRef.current) {
      setHistorylist([...historylist, searchRef.current.value]);
      searchRef.current.value = "";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", function () {
      isDone = false;
      timeoutRef = this.setTimeout(reSize, 0);
      if (isDone) {
        this.clearTimeout(timeoutRef);
      }
    });
  }, []);

  useEffect(() => {
    reSize();
  }, []);

  const reSize = () => {
    if (!isDone) {
      if (searchRef.current) {
        setSearchBoxWidth({
          width: searchRef.current.clientWidth,
          height: searchRef.current.clientHeight,
        });
      }
      isDone = true;
    }
  };
  return (
    <form className={style.container} onSubmit={submitHandler}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search"
        onClick={clickListner}
      />

      {isOpenModal && (
        <>
          <Modal
            searchBoxWidth={searchBox.width}
            searchBoxHeight={searchBox.height}
          />
        </>
      )}
    </form>
  );
};

export default SearchBox;
