import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NewCustomer from "../pages/NewCustomer";
import PageNotFound from "../pages/PageNotFound";
import DataPage from "../pages/DataPage";
import Login from "../pages/Login";
import Testpage from "../pages/Testpage";
import HookForm from "../pages/HookForm";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hookform" element={<HookForm />} />
        <Route path="/testpage" element={<Testpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/datapage" element={<DataPage />} />
        <Route path="/newcustomer" element={<NewCustomer />} />
        <Route path="*" element={<Navigate to="notfound" />} />
        <Route path="notfound" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
