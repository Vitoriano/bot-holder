import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import Login from "./public/login";

const Router = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
 ) 
}

export default Router;