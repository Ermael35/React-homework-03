import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddTodo from "../pages/AddTodo"
import DetailTodo from "../pages/DetailTodo";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtodo" element={<AddTodo/>}/>
        <Route path="/detail" element={<DetailTodo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
