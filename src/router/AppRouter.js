import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import Newblog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Details from "../pages/Details";
import UpdateBlog from "../pages/UpdateBlog";


const AppRouter = () => {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/newblog" element={<Newblog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/update/:id" element={<UpdateBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
