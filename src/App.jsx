import React from 'react';
import './App.css';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Login from "./components/pages/Login/Login";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Home from './components/pages/Home/Home1/Home1';
import Home2 from './components/pages/Home/Home2/Home2';
import Store from './components/pages/Store/Store';
import ShopDetails from './components/pages/Store/ShopDetails/ShopDetails';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import BlogDetails from "./components/pages/Blog/BlogDetails/BlogDetails" ;

import Pages from './components/pages/Pages/Pages';
import Contact from './components/pages/Contact/Contact';

import axios  from 'axios';
import store  from './redux/store';
import { Provider } from 'react-redux';





const App = () => {
  

  return (
    <div>
      <BrowserRouter>
      <Provider store={store}>
      <Header/>
      <Routes>

      <Route exact = {true} path="/login" element={<Login/>}/>


        <Route exact = {true} path="/" element={<Home/>}/>
        <Route exact = {true} path="/home2" element={<Home2/>}/>

        <Route exact = {true} path="/shop" element={<Store/>} />
        <Route exact = {true} path="/shop-details" element={<ShopDetails/>} />

        <Route exact = {true} path="/about" element={<About/>} />

        <Route exact = {true} path="/blog" element={<Blog/>} />
        <Route exact = {true} path="/blog-details" element={<BlogDetails/>} />

        <Route exact = {true} path="/pages" element={<Pages/>} />

        <Route exact = {true} path="/contact" element={<Contact/>} />
          



      </Routes>
    
      <Footer/>
      </Provider>
      </BrowserRouter>
      
    </div>
  )
}

export default App

