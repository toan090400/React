import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// cách sử dụng redux
import store from "./Redux/store";
import { Provider } from "react-redux";
// cách để redux reload không mất dữ liệu
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
