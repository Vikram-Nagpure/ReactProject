import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Product from '../Components/Product';
import AddProduct from '../Components/AddProduct';
import Login from '../Components/Login';
import PrivatePage from '../Components/PrivatePage';
import Description from '../Components/Description';
import EditPage from '../Components/EditPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<PrivatePage><Product /></PrivatePage>} />
      <Route path="/addproduct" element={<PrivatePage><AddProduct /></PrivatePage>} />
      <Route path="/login" element={<Login />} />
      <Route path="/description/:id" element={<PrivatePage><Description /></PrivatePage>} />
      <Route path="/edit/:id" element={<PrivatePage><EditPage /></PrivatePage>} />
    </Routes>
  );
};

export default AllRoutes;
