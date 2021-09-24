import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components'
import Weights2 from '../Images/weights2.jpg'


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

const H2 = styled.h2`
display:flex;
justify-content:center;
color:white;
font-family:'Roboto';
border: 5px solid white;
margin-right:40%;
margin-left:40%;
background:black;
padding-top:1%;
padding-bottom:1%;
border-radius:8px;

`
const Form = styled.form`

display:flex;
flex-direction:column;
padding:2%;
margin-right:80%;
padding-bottom:5%;
flex-wrap:wrap;
color:white;
font-family:'Roboto';



`

const Div = styled.div`
background-image: url(${Weights2});
height: 100vh;
    width: 100%;
    background-repeat:no-repeat;
    background-size:cover;

`


const AddClassForm = props => {

  const history = useHistory();
  const { id } = useParams();

  const [newClass, setNewClass] = useState(initialFormValues)

  const handleChanges = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value })
  };  

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post(`/classes/`, newClass)
          .then(res => {
              console.log(res)
              setNewClass((fitClass)=> [...fitClass, newClass])
              history.push(`/classes/`)
          })
          .catch(err => {
              console.log(err)
          })
      }


    return (
      <Div>
        <H2>Add New Class</H2>
        <Form onSubmit={handleSubmit}>
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
      </Form>
      <button className="md-button form-button">Add New Class</button>
    </Div>
  );
};
  {/* ['Brooklyn', 'SoHo', 'Queens', 'Manhattan'] */}
export default AddClassForm;


  

  

     

      

      
    



       
       
      

       

