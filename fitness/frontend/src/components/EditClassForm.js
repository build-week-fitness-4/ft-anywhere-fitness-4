import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const EditClassForm = (props) => {
    const { push } = useHistory();
    const { id } = useParams();


    const [ newClass, setNewClass ] = useState ({
        class_name: '',
        type: '',
        time: '',
        duration:'',
        intensity: '',
        location: [],
        attendees: '',
        size: ''
    });

    useEffect(() => {
        axiosWithAuth()
        .get(`api/classes/${id}`)
        .then(res => {
            setNewClass(res.data)
        })
    }, {});

    const handleChange = (e) => {
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`api/classes/${id}`, newClass)
        .then(res => {
            props.setNewClass(res.data);
            push(`/classes/${id}`);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const {class_name, type, time, duration, intensity, location, attendees, size} = newClass

    return (
        <div>
        <h2>Edit Class</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor ='name'>Name:</label>
              <input
              type="text"
              name="name"
              onChange={handleChange}
              value={class_name}
              />
       
          <label htmlFor ='type'>Type:</label>
            <input
            type="text"
            name="type"
            onChange={handleChange}
            value={type}
            />

          <label htmlFor ='time'>Time:</label>
            <input
            type="text"
            name="time"
            onChange={handleChange}
            value={time}
            />

          <label htmlFor ='duration'>Duration:</label>
            <input
            type="text"
            name="duration"
            onChange={handleChange}
            value={duration}
            />
    
          <label htmlFor ='level'>Intensity:</label>
            <input
            type="text"
            name="level"
            onChange={handleChange}
            value={intensity}
            />

          <label>Location:
              <select values={location} name ='location' onChange={handleChange}>
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
            onChange={handleChange}
            value={size}
            />

          <label htmlFor ='class-attendees'>Number of Class Attendees:</label>
            <input
            type="text"
            name="class-attendees"
            onChange={handleChange}
            value={attendees}
            />
      </form>
      <button className="md-button form-button">Submit Edit</button>
    </div>
  );

} 

export default EditClassForm;