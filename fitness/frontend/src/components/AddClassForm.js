import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
  class_name: '',
  type: '',
  time: '',
  duration:'',
  intensity: '',
  location: [],
  attendees: '',
  size: ''
};

const AddClassForm = props => {

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
              value={initialFormValues.class_name}
              />
       
          <label htmlFor ='type'>Type:</label>
            <input
            type="text"
            name="type"
            onChange={handleChanges}
            value={initialFormValues.type}
            />

          <label htmlFor ='time'>Time:</label>
            <input
            type="text"
            name="time"
            onChange={handleChanges}
            value={initialFormValues.time}
            />

          <label htmlFor ='duration'>Duration:</label>
            <input
            type="text"
            name="duration"
            onChange={handleChanges}
            value={initialFormValues.duration}
            />
    
          <label htmlFor ='level'>Level:</label>
            <input
            type="text"
            name="level"
            onChange={handleChanges}
            value={initialFormValues.intensity}
            />

          <label>Location:
              <select values={initialFormValues.location} name ='location' onChange={handleChanges}>
                <option value=''>-- Select a Location --</option>
                <option value='Brooklyn'>Brooklyn</option>
                <option value='Soho'>Soho</option>
                <option value='Bed-stuy'>Bed-Stuy</option>
                <option value='Queens'>Queens</option>
              </select>
          </label>

          <label htmlFor ='class-size'>Class Size:</label>
            <input
            type="text"
            name="class-size"
            onChange={handleChanges}
            value={initialFormValues.size}
            />

          <label htmlFor ='class-attendees'>Number of Class Attendees:</label>
            <input
            type="text"
            name="class-attendees"
            onChange={handleChanges}
            value={initialFormValues.attendees}
            />
      </form>
      <button className="md-button form-button">Add New Class</button>
    </div>
  );
};
  {/* ['Brooklyn', 'SoHo', 'Queens', 'Manhattan'] */}
export default AddClassForm;


  

  

     

      

      
    



       
       
      

       

