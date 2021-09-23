import React from 'react';
import { Link } from 'react-router-dom';

const FitClassItem = (props)=> {
  const { id, name, type, level, duration, location,class_size, class_attendees } = props.fitClass;

  return(<tr key={id}>
      <td>{name}</td>
      <td>{type}</td>
      <td>{level}</td>
      <td>{location}</td>
      <td>{duration}</td>
      <td>{class_size}</td>
      <td>{class_attendees}</td>
      <td>
        <Link to={`/classes/${id}`} className="view">
          <input type="button" className="btn btn-secondary" value="View"/>
        </Link>
      </td>
  </tr>);
}

export default FitClassItem;