import { Routes, Route } from "react-router-dom";
import { City } from "../components/City/City";
import { Country } from "../components/Country/Country";
import { Home } from "../components/Home/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/add-country"} element={<Country />} />
      <Route path={"/add-city"} element={<City />} />
    </Routes>
  );
};
