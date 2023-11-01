import React, { useState } from 'react';

function OrderForm() {
  const [formData, setFormData] = useState({
    "PO Number": '',
    "Part Number": '',
    "Part Description": '',
    "Division Delivery": '',
    "Quantity": '',
    "Unit Price": '',
    "CGST": '',
    "Sgst": '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send a request to your Ruby on Rails back-end
    fetch('https://ruby-db-service.onrender.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"order": formData}),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the back-end, e.g., display a success message
        if(data.message)
            window.alert(data.message);
        else
            window.alert(data.exception);
        console.log(data);
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        console.error(error);
        window.alert(error);
        console.log(error.status);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        PO Number:
        <input
          type="text"
          name="PO Number"
          value={formData['PO Number']}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Part Number:
        <input
          type="text"
          name="Part Number"
          value={formData['Part Number']}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Part Description:
        <input
          type="text"
          name="Part Description"
          value={formData['Part Description']}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Division Delivery:
        <input
          type="text"
          name="Division Delivery"
          value={formData['Division Delivery']}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Quantity:
        <input
          type="text"
          name="Quantity"
          value={formData.Quantity}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Unit Price:
        <input
          type="text"
          name="Unit Price"
          value={formData['Unit Price']}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        CGST:
        <input
          type="text"
          name="CGST"
          value={formData.CGST}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        SGST:
        <input
          type="text"
          name="Sgst"
          value={formData.Sgst}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>
      {submitMessage && <p>{submitMessage}</p>} {/* Display the submission message */}
    </form>
  );
}

export default OrderForm;
