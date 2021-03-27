import React, { useState } from "react";
import "./App.css";

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
                              <h1>Masterclass Courses</h1>

      {data
        ? data.map(function (data) {
            return (
                <div className="list">
                    
                <img 
                  src={data.instructor_image_url}
                  alt={data.instructor_name}
                    />
                    <div>
                <h1 className="name"> {data.instructor_name}</h1>
                    <h2 className="title"> {data.title}</h2>
                    <p className="description">
                  {data.description}
                        </p>
                    </div>

              </div>
            );
          })
        : ""}
    </div>
  );
};
export default App;
