import React from 'react';
import { Link } from 'react-router-dom';

const FitClassItem = (props)=> {
  const { id, class_name, type, time,  intensity, duration, location, size, attendees } = props.fitClass;

  return(<tr key={id}>
      <td>{class_name}</td>
      <td>{type}</td>
      <td>{time}</td>
      <td>{intensity}</td>
      <td>{location}</td>
      <td>{duration}</td>
      <td>{size}</td>
      <td>{attendees}</td>
      <td>
        <Link to={`/classes/${id}`} className="view">
          <input type="button" className="btn btn-secondary" value="View"/>
        </Link>
      </td>
  </tr>);
}

export default FitClassItem;