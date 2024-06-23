import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Pages/Main/Main";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";
import Error404 from "./Pages/Error/Error404";
import AllCourse from "./Pages/Courses/AllCourse";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<AllCourse />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
