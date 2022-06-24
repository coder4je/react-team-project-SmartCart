import React, { useState } from "react";

function UserForm({ stateData }) {
  const initialValue = {
    state: "",
    index: "",
    image: "",
    income: "",
  };
  const [formData, setFormData] = useState(initialValue);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  }

  function handleSubmit(e, selectedId) {
    e.preventDefault();
    const userInfo = {
      state: formData.state,
      index: formData.index,
      image: formData.image,
      income: formData.income,
    };
    fetch(`http://localhost:3000/costAndIncome/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((onAddData) => console.log(onAddData));
    setFormData(initialValue);
  }

  const stateList = stateData.map((item) => {
    return (
      <option key={item.id} value={item.state}>
        {item.state}
      </option>
    );
  });

  return (
    <div>
      <h3>Update DataBase</h3>
      <form onSubmit={handleSubmit}>
        <input
          fluid
          label="State"
          // if
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
        <button>Submit</button>
      </form>
    </div>
  );
}
export default UserForm;
