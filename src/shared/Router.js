import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddTodo from "../pages/AddTodo"


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtodo" element={<AddTodo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
