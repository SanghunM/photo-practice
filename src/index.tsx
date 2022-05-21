import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./context/modalContext";
import { ElementInfoProvider } from "./context/elementInfoContext";
import { SearchHistoryProvider } from "./context/search-history-context";
ReactDOM.render(
  <React.StrictMode>
    <ElementInfoProvider>
      <ModalProvider>
        <SearchHistoryProvider>
          <App />
        </SearchHistoryProvider>
      </ModalProvider>
    </ElementInfoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
