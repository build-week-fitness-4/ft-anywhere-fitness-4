import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const FitClass = (props) => {
    const { deleteClass } = props;
    const [fitClass, setFitClass] = useState([])

    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth()
            .get(`classes/${id}`)
            .then(res => {
                setFitClass(res.data)
            })
            .catch(err => {
                console.log({err:err})
            })
    }, []);

    const handleDelete = () => {
        axiosWithAuth()
            .delete(`/classes/${id}`)
            .then(res => {
                props.deleteClass(id)
                history.push('/classes')
            })
    }

    return (
        <div>
            <section className="class-details">
                <div>
                    <label>Name: <strong>{fitClass.class_name}</strong></label>
                </div>
                <div>
                    <label>Type: <strong>{fitClass.type}</strong></label>
                </div>
                <div>
                    <label>Time: <strong>{fitClass.time}</strong></label>
                </div>
                <div>
                    <label>Duration: <strong>{fitClass.duration}</strong></label>
                </div>
                <div>
                    <label>Intensity: <strong>{fitClass.intensity}</strong></label>
                </div>
                <div>
                    <label>Location: <strong>{fitClass.location}</strong></label>
                </div>
                <div>
                    <label>Class Size: <strong>{fitClass.size}</strong></label>
                </div>
                <div>
                    <label>Registered Class Attendees: <strong>{fitClass.attendees}</strong></label>
                </div>
                            
            </section>

            <section>
                <Link to={`/classes/edit/${fitClass.id}`} className="m-2 btn btn-success">Edit</Link>
                <span onClick={handleDelete} className="delete"><input type="button" value="Delete"/></span>
            </section>
        </div>
    )


}

export default FitClass;

