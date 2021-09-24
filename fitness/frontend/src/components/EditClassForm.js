import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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


const EditClassForm = props => {

    const history = useHistory();
	const { id } = useParams();
    const [fitClass, setFitClass] = useState(initialFormValues)

    useEffect(() => {
		axiosWithAuth()
            .get(`/classes/${id}`)
			.then(res => {
				setFitClass(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

    const handleChanges = (e) => {
      setFitClass({ ...fitClass, [e.target.name]: e.target.value })
    };  

    const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
        .put(`/classes/${id}`, fitClass)
        .then(res => {
            props.setFitClass(res.data);
            history.push(`/classes/${id}`)
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
      <div>
        <h2>Edit Class</h2>
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
            value={initialFormValues.class_size}
            />

          <label htmlFor ='class-attendees'>Number of Class Attendees:</label>
            <input
            type="text"
            name="class-attendees"
            onChange={handleChanges}
            value={initialFormValues.class_attendees}
            />
      </form>
      <button className="md-button form-button">Submit</button>
    </div>
  );
};
export default EditClassForm;


  

  

     

      

      
    



       
       
      

       

