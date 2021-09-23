import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const initialValues = {
  username: '', 
  password: '',
  email: ''
}

const InstructorSignUp = (props) => {

  const [formValues, setFormValues] = useState(initialValues);
  const [ error, setError ] = useState('')
  const history  = useHistory()


    const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })

    };  


    const submit  = (e) => {
      console.log('hereee')
        if (initialValues.username === '' || initialValues.password === '' || initialValues.email) {
          setError('All fields are required!')
        }
        e.preventDefault();
        history.push('/classes')
    }
     
       return (
         <div>
           <div className="login-form">
           <form onSubmit={submit}>
                 <label htmlFor='username'>Username:</label>
                     <input id='username'
                     name='username' 
                     value={formValues.username} 
                     onChange={handleChanges}/>
                     
                 <label htmlFor='password'>Password:</label>
                     <input id='password' 
                     name='password' 
                     type='password'
                     value={formValues.password} 
                     onChange={handleChanges}/>
     
                 <label htmlFor='email'>Email:</label>
                     <input id='email' 
                     name='email' 
                     type='email'
                     value={formValues.email} 
                     onChange={handleChanges}/>

                     <label> Choose Your Role </label>

                    <label>Instructor</label>
                     <input id='instructor'
                     name='instructor'
                     type='radio'
                     value='yes' />

                    <label>Client</label>
                    <input id='client'
                     name='client'
                     type='radio'
                     value='yes' />

     
                 <button id='submit'>Submit</button>
             </form>
           </div>
     
         </div>
       );
}

 

export default InstructorSignUp;

