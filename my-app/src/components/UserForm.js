import React, { useState} from 'react';
import { Form } from "semantic-ui-react";
// import DataManager from './DataManager';
function UserForm ({ onAddData}) {
    const [formData, setFormData] = useState({
        state: "",
        income: "",
        compareState: "",
    })
    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.state]: event.target.value,
        })
    }
    function handleSubmit(){
        const userInfo ={
            state: formData.state,
            income: formData.income,
            compareState: formData.compareState
        };
        fetch("http://localhost:3000/costAndIncome", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        })
          .then(response=>response.json())
          .then(onAddData);
    }
    return (
        <div>
            <h3>input data here to compare</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="State"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        label="income"
                        placeholder="income"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Select State To Compare"
                        placeholder="compare with another state"
                        name="compare state"
                        value={formData.compareState}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
}
export default UserForm