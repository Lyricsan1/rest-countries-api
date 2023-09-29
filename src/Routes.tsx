import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeDetail from "./pages/HomeDetail";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name" element={<HomeDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
