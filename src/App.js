import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";
// import { Fclike, FcLikePlaceholder } from 'react-icons/fa';

const App = () => {
  const [data, setData] = useState(null);
  fetch("./masterclass.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      setData(data);
    })
    .catch(function (err) {
      console.log(err, "error");
    });


    
  return (
    <div className="App">
      {data
        ? data.map(function (data) {
            return (
              <div className="">
                <img
                  src={data.instructor_image_url}
                  alt={data.instructor_name}
                />
                <h1> {data.instructor_name}</h1>
                <h4> {data.title}</h4>
                <h2>
                  {data.description}
                </h2>
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default App;
