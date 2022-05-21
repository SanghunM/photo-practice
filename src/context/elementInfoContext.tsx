import React, { createContext, useState } from "react";

interface IState {
  heightOfHeader: number;
}

export const ElementInfoContext = createContext([0, null as any]);

export const ElementInfoProvider: React.FC = ({ children }) => {
  const [heightOfHeader, setHeightOfHeader] =
    useState<IState["heightOfHeader"]>(0);
  return (
    <ElementInfoContext.Provider value={[heightOfHeader, setHeightOfHeader]}>
      {children}
    </ElementInfoContext.Provider>
  );
};
