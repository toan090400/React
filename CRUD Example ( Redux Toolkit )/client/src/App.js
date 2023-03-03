import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Edit from "./pages/edit";
import Create from "./pages/create";
import Home from "./pages/home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/rooms/:dataID" element={<Edit />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
