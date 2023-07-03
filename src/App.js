
import React from "react";
import './App.css';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Item from "./components/Item";
import HomeScreen from "./screen/home";
import Edit from "./screen/edit"
import Details from "./screen/details";
// import { useSelector } from 'react-redux';

function App() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn)
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/login" Component={Login}></Route>
          <Route path="/home" Component={HomeScreen}> </Route>
          <Route path="/details" Component={Details}></Route>
          <Route path="/edit" Component={Edit}></Route>

        </Routes>
      </Router>



    </div>
  );
}

export default App;
