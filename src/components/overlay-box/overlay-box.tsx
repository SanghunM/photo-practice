import { Dispatch, SetStateAction, useContext } from "react";
import { setOriginalNode } from "typescript";
import { ElementInfoContext } from "../../context/elementInfoContext";
import { ModalContext } from "../../context/modalContext";
import style from "./overlay-box.module.scss";

export enum OverlayType {
  FULL,
  WITHHEIGHT,
}

interface IProps {
  cardBoxSize: IStyles;
  type?: OverlayType;
  isTransparent?: boolean;
  origin?: string;
}

interface IStyles {
  top?: number;
  width: number | string;
  height?: number | string;
  paddingTop?: number | string;
  borderRadius?: number;
  opacity?: number;
}

const OverlayBox: React.FC<IProps> = ({
  cardBoxSize,
  type = OverlayType.FULL,
  isTransparent = false,
  origin = "main",
}) => {
  const { setOpenModal, setSelectBox } = useContext(ModalContext);
  const [heightOfHeader] = useContext(ElementInfoContext);
  const getTop = (): number => {
    let top: number = 0;
    switch (type) {
      case OverlayType.WITHHEIGHT:
        top = heightOfHeader;
        break;
      case OverlayType.FULL:
        top = 0;
        break;
    }
    return top;
  };

  const getOverlayStyle = (): any => {
    const style: IStyles = {
      width: cardBoxSize.width,
      top: getTop(),
      opacity: isTransparent ? 0 : 0.5,
      borderRadius: cardBoxSize.borderRadius ? cardBoxSize.borderRadius : 0,
    };
    if (origin === "card") {
      delete style["opacity"];
    }
    if (cardBoxSize.paddingTop) {
      style["paddingTop"] = cardBoxSize.paddingTop;
    }
    if (cardBoxSize.height) {
      style["height"] = cardBoxSize.height;
    }
    return style;
  };

  return (
    <div
      className={style.container}
      style={getOverlayStyle()}
      onClick={() => {
        setOpenModal && setOpenModal(false);
        setSelectBox && setSelectBox(false);
      }}
    ></div>
  );
};

export default OverlayBox;
