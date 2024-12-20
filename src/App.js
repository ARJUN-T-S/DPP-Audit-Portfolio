import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import OfficeTeam from "./OfficeTeam";
import Contact from "./Contact";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Service></Service>
      <OfficeTeam></OfficeTeam>
      <Contact></Contact>
    </div>
  );
}

export default App;
