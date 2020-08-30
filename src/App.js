import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";

function App() {
  return (
    <>
      {/* Navbar should always be on the top */}
      <Navbar />
      {/* switch will take any of the component after matching the path */}
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/cert" component={Certifications} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
