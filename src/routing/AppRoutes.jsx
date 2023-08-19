import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Collection from './../pages/Collection';
import ProductDetail from "../pages/ProductDetail";
import LocationStore from "../pages/LocationStore";
import ProductCatagories from "../pages/ProductCatagories";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="collection" element={<Collection />} />
          <Route path="productCatagories" element={<ProductCatagories />} />
          <Route path="productDetail" element={<ProductDetail />} />
          <Route path="locationStore" element={<LocationStore />} />
        </Route>
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
