import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Button from "./components/button";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import AllRoutes from "./components/routes";
import Contact from "./pages/contact";
import "./App.css";
class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <AllRoutes />
          <Footer />
        </BrowserRouter>

       
      </div>

      
    );
  }
}

export default App;
