import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    state: "",
    index: 0,
    image: "",
    income: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.state]: event.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const userInfo = {
      state: formData.state,
      index: formData.index,
      image: formData.image,
      income: formData.income,
    };
    fetch("http://localhost:3000/costAndIncome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((onAddData) => console.log(onAddData));
  }

  return (
    <div>
      <h3>Update DataBase</h3>
      <form onSubmit={handleSubmit}>
        <form widths="equal">
          <input
            fluid
            label="State"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            fluid
            label="index"
            placeholder="index"
            name="index"
            value={formData.index}
            onChange={handleChange}
          />
          <input
            fluid
            label="image"
            placeholder="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <input
            fluid
            label="income"
            placeholder="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
          />
        </form>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default UserForm;
