import React, {useState } from 'react'
import './styles.css'

export default function App() {
    const [data , setData]=useState(null)
    fetch('./masterclass.json').then(
        function (res) {
            return res.json()
        }
    ).then(function (data) {
        setData(data)
    }).catch(function(err){console.log(err, 'error')})
        
    return (
        <div className='App'>
            {
                data? data.map(
          function(data){
                  return (<div className="card"> 
                  <h4> {data.title}</h4>
                  <h2> {data.description}  {data.lastName}</h2>
                  <h3> {data.instructor_name}</h3>
                  <img src={data.instructor_image_url} alt={data.instructor_name}/>
              </div>)
          }
        ):""
      }
        </div>
    );
    }

