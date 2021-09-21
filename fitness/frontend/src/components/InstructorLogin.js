import React, {useState} from "react";
// import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";


const initialValues = {
  username: '', 
  password: ''
}

const InstructorLogin = (props) => {

  const [formValues, setFormValues] = useState(initialValues);
  const [ error, setError ] = useState('')
  // const { push } = useHistory()


  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  };


  const login = (e) => {
    if (initialValues.username === '' || initialValues.password === '') {
      setError('Both fields are required!')
    }
    e.preventDefault();
    // push('/dashboard')
  }
   
    return (
      <div>
        <h1>Welcome!</h1>
        <div className="login-form">
          <form onSubmit={login}>
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
              <button id='submit'>Login</button>
              <Link to='/sign-up'> Not an instructor?</Link>
          </form>
        </div>
    </div>
     );
  
}

 

export default InstructorLogin;

