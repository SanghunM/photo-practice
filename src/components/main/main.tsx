import React, { useCallback, useEffect, useState } from "react";
import style from "./main.module.scss";
import { CardItemType } from "./dataModel";
import CardItemList from "../card-item-list/card-item-list";

interface IState {
  cardItems: CardItemType[];
}

const Main = () => {
  const [cardItems, setCardItems] = useState<IState["cardItems"]>([]);
  const { REACT_APP_UNSPLASH_URL_ACCESS_KEY, REACT_APP_UNSPLASH_URL } =
    process.env;
  const getURL = useCallback(
    () =>
      `${REACT_APP_UNSPLASH_URL}?client_id=${REACT_APP_UNSPLASH_URL_ACCESS_KEY}`,
    [REACT_APP_UNSPLASH_URL, REACT_APP_UNSPLASH_URL_ACCESS_KEY]
  );
  useEffect(() => {
    fetch(getURL())
      .then((res) => res.json())
      .then((res) => {
        const newCardItems: CardItemType[] = res.map((e: any) => {
          return {
            id: e.id,
            urls: e.urls,
            created_at: e.created_at,
            links: e.links,
            categories: e.categories,
            username: e.user.name,
            likes: e.likes,
            total_collections: e.user.total_collections,
            total_photos: e.user.total_photos,
            total_likes: e.user.total_likes,
          };
        });
        console.log("test", newCardItems);
        setCardItems(newCardItems);
      })
      .catch((err) => console.log(err));
  }, [getURL]);

  return (
    <div className={style.mainContainer}>
      {<CardItemList origin="main" items={cardItems} />}
    </div>
  );
};

export default Main;

// restful : data end point has a url
