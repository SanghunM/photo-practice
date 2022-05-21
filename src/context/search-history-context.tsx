import React, { createContext, useEffect, useState } from "react";
import searchHistoryData from "../config/searchHistoryData.json";
interface IState {
  historylist: string[];
}

export const SearchHistoryContext = createContext({
  historylist: [] as string[],
  setHistorylist: null as any,
});

export const SearchHistoryProvider: React.FC = ({ children }) => {
  const [historylist, setHistorylist] = useState<IState["historylist"]>([]);

  useEffect(() => {
    setHistorylist(searchHistoryData.historeis);
  }, []);

  return (
    <SearchHistoryContext.Provider value={{ historylist, setHistorylist }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};
function setHistorylist() {
  throw new Error("Function not implemented.");
}
