import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
  name: '',
  type: '',
  duration: '',
  level: '',
  location: [],
  class_size: '',
  class_attendees: ''

};

const ClassForm = props => {

    const [fitClass, setFitClass] = useState(initialFormValues)

    const handleChanges = (e) => {
      setFitClass({ ...fitClass, [e.target.name]: e.target.value })
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
        </form>

        <form onSubmit={handleSubmit}>
          <label htmlFor ='type'>Type:</label>
            <input
            type="text"
            name="type"
            onChange={handleChanges}
            value={initialFormValues.type}
            />
      </form>

      <form onSubmit={handleSubmit}>
          <label htmlFor ='duration'>Duration:</label>
            <input
            type="text"
            name="duration"
            onChange={handleChanges}
            value={initialFormValues.duration}
            />
      </form>
    
      <form onSubmit={handleSubmit}>
          <label htmlFor ='level'>Level:</label>
            <input
            type="text"
            name="level"
            onChange={handleChanges}
            value={initialFormValues.level}
            />
      </form>

      <form onSubmit={handleSubmit}>
          <label htmlFor ='class-size'>Class Size:</label>
            <input
            type="text"
            name="class-size"
            onChange={handleChanges}
            value={initialFormValues.class_size}
            />
      </form>

      <form onSubmit={handleSubmit}>
          <label htmlFor ='class-attendees'>Number of Class Attendees:</label>
            <input
            type="text"
            name="class-attendees"
            onChange={handleChanges}
            value={initialFormValues.class_attendees}
            />
      </form>
      <button className="md-button form-button">Add New Class</button>
    </div>
  );
};
  {/* ['Brooklyn', 'SoHo', 'Queens', 'Manhattan'] */}
export default ClassForm;


  

  

     

      

      
    



       
       
      

       

