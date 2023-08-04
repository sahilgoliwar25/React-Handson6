import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./Students";
import Home from "./Home";
import Contact from "./Contact";
import StoreData from "./Store";
import StudentDesc from "./StudentDesc";

function RouteCompo() {
  const [data, setData] = useState([
    {
      Name: "Rachel",
      Age: 20,
      Course: "MERN",
      Batch: "January",
    },
    {
      Name: "Phoebe",
      Age: 12,
      Course: "MEAN",
      Batch: "February",
    },
    {
      Name: "Joey",
      Age: 45,
      Course: "MERN",
      Batch: "March",
    },
    {
      Name: "Chandler",
      Age: 23,
      Course: "MERN",
      Batch: "February",
    },
    {
      Name: "Ross",
      Age: 54,
      Course: "MEAN",
      Batch: "March",
    },
  ]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/students"
          element={
            <StoreData.Provider value={{ stuname: data, updateStu: setData }}>
              <Students />
            </StoreData.Provider>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/student-desc"
          element={
            <StoreData.Provider value={{ stuname: data, updateStu: setData }}>
              <StudentDesc />
            </StoreData.Provider>
          }
        />
      </Routes>
    </div>
  );
}
export default RouteCompo;
