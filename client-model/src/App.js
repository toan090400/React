import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
