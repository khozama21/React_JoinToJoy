import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./index.css";
import "./style.css";
import Home from "./views/home";
import Contact from "./views/Contact";
import Contact2 from "./views/contact2";
import About from "./views/About";

import Login from "./views/Login";
import Signup from "./views/Signup";
import { Categories } from "./categories/Categories";
import { SingleCat } from "./categories/SingleCat";
import { ApplicationForm } from "./categories/ApplicationForm";

const App = () => {
  const [hide, setHide] = useState("hide");
  const nav = useHistory();
  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", false);
    location.reload();
  };
  const hideHandler = () => {
    if (hide == "hide") {
      setHide("no");
    } else {
      setHide("hide");
    }
  };
  return (
    <Router>
      {/* nave bar start */}
      <nav className="mainNav">
        <div className="leftNav">
          <div className="navImage">
            <img src="/playground_assets/group%207-1200w.png" />
          </div>
          <div className="navLinks">
            <div className={`${hide}`}>
              <span onClick={hideHandler} className="icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="burgerLinks">
                <li>
                  <Link className="navLink" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navLink" to="/categories">
                    Catergories
                  </Link>
                </li>
                <li>
                  <Link className="navLink" to="/contact2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navLink" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navLink" to="/contact">
                    contact Us
                  </Link>
                </li>
              </div>
            </div>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/categories">
              Catergories
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
            <Link className="navLink" to="/contact">
              ContactUs
            </Link>
          </div>
        </div>
        {(() => {
          if (localStorage.getItem("isLoggedIn") == "false") {
            return (
              <div className="rightNav">
                <Link className="navLog" to="/login">
                  Login
                </Link>
                <Link className="navLog" to="/Signup">
                  SignUp
                </Link>
              </div>
            );
          } else if (localStorage.getItem("isLoggedIn") == "true") {
            return (
              <div className="rightNav">
                <button className="navLog" onClick={logoutHandler}>
                  LogOut
                </button>
              </div>
            );
          } else {
            return (
              <div className="rightNav">
                <Link className="navLog" to="/login">
                  Login
                </Link>
                <Link className="navLog" to="/Signup">
                  SignUp
                </Link>
              </div>
            );
          }
        })()}
      </nav>
      {/* nave bar end */}
      {/* body start */}
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={About} path="/about" />
        <Route exact component={Categories} path="/categories" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Login} path="/login" />
        <Route exact component={Signup} path="/Signup" />
        <Route path="/categories/:id" component={SingleCat} />
        <Route path="/application" component={ApplicationForm} />
      </div>
      {/* body end*/}
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
