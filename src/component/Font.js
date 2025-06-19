import React, { useState } from 'react';

function Font() {
  const [formData, setFormData] = useState({
    bookname: '',
    subject: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/books', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
    
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '400px', background:"aqua"}}>
      
      <h2>Add a Book</h2>
      <label>
       <b>Book Name ➞</b>
        <input type="text"name="bookname"value={formData.bookname}onChange={handleChange}required/>
      </label>

      <br /><br/>

      <label>
        <b>Subject ➞</b>
        <input type="text"name="subject"value={formData.subject}onChange={handleChange}required />
      </label>

      <br /><br />
      <label>
        <b>Price ➞</b>
        <input type="number"name="price"value={formData.price}onChange={handleChange}required />
      </label>
      
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Font;