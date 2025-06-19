import React, { useState } from "react";
import './Result.css';

function Result() {
  const [data, setData] = useState('Result');
  const [formDetail, setFormDetail] = useState({

    roll_no: ''

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormDetail(prev => ({ ...prev, [name]: value }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/result',

      {
        method: 'POST',

        headers: {

          'Content-Type': 'application/json'

        },
        body: JSON.stringify(formDetail)

      });

    const result = await response.json();
    let x = JSON.parse(result.message);
    let name = x[0]["name"];
    let rollno = x[0]["roll_no"];
    let java = x[0]["java"];
    let python = x[0]["python"];
    let show = `RollNo=${rollno} ,Name=${name} ,Java=${java} ,Python=${python}`;

    setData(show);
  };

  return (
    <div>
      <h1>{data}</h1>

      <form onSubmit={handleSubmit} style={{ background: 'black', height: "510px" }}>

  <h2 className="check">😊 CHECK RESULT 😔</h2>

    <h2 class="col">😊 फेल हुआ तो पापा मारेंगे... डर तो पापा से है 😔</h2>
  


        <label className="label">

          <b className="num">Roll_No</b>

          <input className="input" type="number" name="roll_no" placeholder="Enter Roll_No.." value={formDetail.roll_no} onChange={handleChange} required />


<button className="roll" type="submit">Submit</button>
        
      </label>

      </form>
    </div>
  )

}
export default Result;