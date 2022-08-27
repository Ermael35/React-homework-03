import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import ListTodo from "../pages/ListTodo";
import Detail from "../pages/Detail";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/listtodo" element={<ListTodo/>}/>
            <Route path="/detail" element={<Detail/>} />
            <Route path="*" element={<>404 NOT FOUNG</>} />
        </Routes>
        </BrowserRouter>
        
    )
}

export default Router;
