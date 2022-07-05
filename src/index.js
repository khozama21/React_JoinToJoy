import React ,{useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import "./style.css";
import Home from "./views/home";
import Contact from "./views/Contact";

const App = () => {
 const [hide,setHide]=useState("hide")
  const hideHandler = ()=>{
    if(hide=="hide"){
      setHide("no")
    }else{
      setHide("hide")
    }

    
  }  
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
                <Link className="navLink" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/">
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
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/contact">
              ContactUs
            </Link>
          </div>
        </div>
        <div className="rightNav">
          <Link className="navLog" to="/contact">
            Login
          </Link>
          <Link className="navLog" to="/contact">
            SignUp
          </Link>
        </div>
      </nav>
      {/* nave bar end */}
      {/* body start */}
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Contact} path="/contact" />
      </div>
      {/* body end*/}
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
