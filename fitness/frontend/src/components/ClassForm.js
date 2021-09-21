import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
  name: '',
  type: '',
  duration: '',
  level: '',
  location: ['Brooklyn', 'SoHo', 'Queens', 'Manhattan'],
  class_size: '',
  class_attendees: ''

};

const ClassForm = props => {

    const [fitClass, setFitClass] = useState(initialFormValues)

    const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })

    };  
    setFitClass({
      ...fitClass,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add New Class</h2>
      <form onSubmit={handleSubmit}>
          <label htmlFor ='name'>Name:</label>
            <input
            type="text"
            name="name"
            onChange={handleChanges}
            value={initialFormValues.name}
            />


       
        <div />

        <button className="md-button form-button">Add New Class</button>
      </form>
    </div>
  );
};

export default ItemForm;
