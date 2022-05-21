import { useContext } from "react";
import CardItem from "./components/cardItem/cardItem";
import Main from "./components/main";
import OverlayBox, { OverlayType } from "./components/overlay-box/overlay-box";
import Search from "./components/search";
import { ModalContext } from "./context/modalContext";

function App() {
  const { isOpenModal, isSelectBox } = useContext(ModalContext);

  return (
    <div className="App">
      <>
        {isOpenModal && (
          <OverlayBox
            cardBoxSize={{ width: "100vw", height: "100vh" }}
            type={OverlayType.WITHHEIGHT}
          />
        )}
        {isSelectBox && (
          <OverlayBox
            cardBoxSize={{ width: "100vw", height: "100vh" }}
            isTransparent={true}
          />
        )}
        <Search />
        <Main />
      </>
    </div>
  );
}

export default App;
