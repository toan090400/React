import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/Detail" element={<Detail />} />
    </Routes>
  );
};

export default App;
