import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BaseURL = "http://localhost:5000";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const dataCities = await fetch(`${BaseURL}/cities`);
        const getCities = await dataCities.json();
        setCities(getCities);
      } catch (error) {
        alert("Error Fetching Data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />}></Route>
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />

            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
