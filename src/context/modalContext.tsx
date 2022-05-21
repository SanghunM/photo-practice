import React, { createContext, useEffect, useState } from "react";

interface IState {
  isOpenModal: boolean;
  isSelectBox: boolean;
  isUpdateBox: boolean;
}

export const ModalContext = createContext({
  isOpenModal: false,
  setOpenModal: null as any,
  isSelectBox: false,
  setSelectBox: null as any,
  isUpdateBox: false,
  setUpdateBox: null as any,
});

export const ModalProvider: React.FC = ({ children }) => {
  const [isOpenModal, setOpenModal] = useState<IState["isOpenModal"]>(false);
  const [isSelectBox, setSelectBox] = useState<IState["isSelectBox"]>(false);
  const [isUpdateBox, setUpdateBox] = useState<IState["isUpdateBox"]>(false);

  useEffect(() => {
    if (isOpenModal) {
      setSelectBox(false);
      setUpdateBox(false);
    }
  }, [isOpenModal]);

  useEffect(() => {
    if (isSelectBox) {
      setOpenModal(false);
      setUpdateBox(false);
    }
  }, [isSelectBox]);

  useEffect(() => {
    if (isUpdateBox) {
      setOpenModal(false);
      setSelectBox(false);
    }
  }, [isUpdateBox]);
  return (
    <ModalContext.Provider
      value={{
        isOpenModal,
        setOpenModal,
        isSelectBox,
        setSelectBox,
        isUpdateBox,
        setUpdateBox,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
