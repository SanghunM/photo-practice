import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./search.module.scss";
import SearchBox from "../search-box";
import { ElementInfoContext } from "../../context/elementInfoContext";
import useElementHeight from "../../hooks/useElementHeight";
import SelectiBox from "../selectBox/selectBox";
import SelectBox from "../selectBox/selectBox";
import { ModalContext } from "../../context/modalContext";
import ButtonItem from "../buttonItem/buttonItem";
import UpdateBox from "../updateBox/updateBox";

export enum MenuType {
  None,
  USER_INFO,
  NOTIFICATION,
}

interface IState {
  type: MenuType;
}

const Search = () => {
  const [type, setType] = useState<IState["type"]>(MenuType.None);
  const [heightOfHeader, setHeightOfHeader] = useContext(ElementInfoContext);
  const headerRef = useRef<HTMLDivElement>(null);
  const {
    isOpenModal,
    setOpenModal,
    isSelectBox,
    setSelectBox,
    isUpdateBox,
    setUpdateBox,
  } = useContext(ModalContext);

  useEffect(() => {
    const headerHeight = headerRef.current?.getBoundingClientRect().height;
    setHeightOfHeader(headerHeight);
  }, []);

  const selectBoxListner = () => {
    setSelectBox(!isSelectBox);
  };

  const updateBoxListner = () => {
    setUpdateBox(!isUpdateBox);
  };

  return (
    <div className={style.searchContainer} ref={headerRef}>
      <div className={style.flexBox}>
        {/* <div className={`${style.navItem} ${style.logoItem}`}>
          <i className={`fa-solid fa-calendar-days ${style.logo}`}></i>
        </div> */}
        <ButtonItem
          styling={{
            padding: "0.5rem",
            width: "48px",
            borderRadius: "50%",
          }}
        >
          <i className={`fa-solid fa-calendar-days ${style.logo}`}></i>
        </ButtonItem>
        <ButtonItem styling={{ width: "80px" }}>Weekly</ButtonItem>
        <ButtonItem styling={{ width: "80px" }}>Daily</ButtonItem>
      </div>
      <div className={style.wholeBox}>
        <SearchBox />
      </div>
      <div className={style.flexBox}>
        <ButtonItem
          styling={{ position: "relative", width: "80px" }}
          onClick={() => {
            setType(MenuType.NOTIFICATION);
            selectBoxListner();
          }}
        >
          <i className="fa-solid fa-bell"></i>
          {isUpdateBox && (
            <>
              <SelectBox width={300} searchBoxHeight={68} type={type} />
            </>
          )}
          <span className={style.number}> 8+ </span>
        </ButtonItem>

        <ButtonItem styling={{ width: "80px" }}>
          <i className="fa-solid fa-comment"></i>
        </ButtonItem>
        <ButtonItem styling={{ width: "80px" }}>
          <i className="fa-solid fa-circle-user"></i>
        </ButtonItem>
        <ButtonItem
          styling={{ position: "relative", width: "80px" }}
          onClick={() => {
            setType(MenuType.USER_INFO);
            selectBoxListner();
          }}
        >
          <i className="fa-solid fa-arrow-down"></i>
          {isSelectBox && (
            <>
              <SelectBox width={300} searchBoxHeight={68} type={type} />
            </>
          )}
        </ButtonItem>
      </div>
    </div>
  );
};

export default Search;
