import React, { useContext, useEffect, useState } from "react";
import { ElementInfoContext } from "../context/elementInfoContext";

interface IState {
  height: number;
}

export default function useElementHeight(height: number) {
  const [, setHeightOfHeader] = useContext(ElementInfoContext);
  useEffect(() => {
    setHeightOfHeader(height);
  }, [height]);

  return height;
}
