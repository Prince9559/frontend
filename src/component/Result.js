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
    let name = x[0]["Name"];
    let rollno = x[0]["Roll_No"];
    let java = x[0]["Java"];
    let python = x[0]["Python"];
    let c = x[0]["C"];
    let cpp = x[0]["C++"];
    let father = x[0]["Father_Name"];

  let total = (java) + (python) + (c) + (cpp);

  let persent=(total)/4;


let show = `<table class="table" border='1'><tr><td>Roll_no</td><td>Name</td><td>Father_Name</td><td>Java</td><td>Python</td>
<td>C</td><td>C++</td><td>Total</td><td>Persent</td></tr>`;

    show += `<tr><td>${rollno}</td><td>${name}</td><td>${father}</td><td>${java}</td><td>${python}</td>
    <td>${c}</td><td>${cpp}</td><td>${total}</td><td>${persent}%</td></tr></table>`;

    document.getElementById("d").innerHTML = show;
    setData(show);

  };

  return (
    <div class="box">

  
      <h1>{setData}</h1>

      <form onSubmit={handleSubmit}>

        <h2 className="check">😊 PLEASE CHECK RESULT 😔</h2>

        <h2 class="col">😀 फेल हुए तो पापा आटो दिला देंगे... 😅</h2>

        <label className="label">

          <b className="num">Roll_No</b>

          <input className="input" type="number" name="roll_no" placeholder="Enter Roll_No.." value={formDetail.roll_no} onChange={handleChange} required />
 
         

          <button className="roll" type="submit">Submit</button>

        </label>

      <br></br>
      <br></br>
       <div id="d"></div>

      </form>

    </div>
  )

}
export default Result;