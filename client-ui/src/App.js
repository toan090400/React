import Home from "./pages/home";
import Error from "./pages/error";
import Index1 from "./pages/index1";
import NavR1 from "./pages/nav_r1";
import NavR2 from "./pages/nav_r2";
import Form from "./pages/form";
import FormUser from "./pages/form_user";
import Login1 from "./pages/login_1";
import Login2 from "./pages/login_2";
import Pagination from "./pages/pagination";
import Table from "./pages/table";
import Slider from "./pages/slider";
import Message from "./pages/message";
//
import { Routes, Route } from "react-router-dom";
//
import "./style/App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/indexPage1" element={<Index1 />} />

      <Route path="/nav_r1" element={<NavR1 />} />
      <Route path="/nav_r2" element={<NavR2 />} />

      <Route path="form" element={<Form />} />

      <Route path="/form_user" element={<FormUser />} />

      <Route path="/login_1" element={<Login1 />} />
      <Route path="/login_2" element={<Login2 />} />

      <Route path="/pagination" element={<Pagination />} />

      <Route path="/table" element={<Table />} />

      <Route path="/slider" element={<Slider />} />

      <Route path="/message" element={<Message />} />

      <Route path="*" element={<Error />} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};

export default App;
