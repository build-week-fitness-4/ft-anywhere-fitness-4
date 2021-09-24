import React, {useState} from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Weights from '../Images/weights.jpg'


const Page = styled.div`
background-image: url(${Weights});
  height: 100vh;
    width: 100%;
    background-repeat:no-repeat;
    background-size:cover;

`


const initialValues = {
  username: '', 
  password: ''
}

const Welcome = styled.h1`
    display:flex;
    justify-content:center;
    background:black;
    color:white;
    font-family:'Roboto';
  `

  const EntryLabel = styled.label`
  display:flex;
  justify-content:center;
  font-family:'Roboto';


  `

  const Loginform = styled.form`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-right:40%;
    margin-left:40%;
  `

  const Input = styled.input`

  display:flex;
  justify-content:center;
  `



const InstructorLogin = (props) => {

  const [formValues, setFormValues] = useState(initialValues);
  const [ error, setError ] = useState('')
  const history = useHistory()


  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  };


  const login = (e) => {
    if (initialValues.username === '' || initialValues.password === '') {
      setError('Both fields are required!')
    }
    e.preventDefault();
    history.push('/classes')
  }



    return (
      <Page>
        <Welcome>Welcome!</Welcome>
        <div className="login-form">
          <Loginform onSubmit={login}>
              <EntryLabel htmlFor='username'>Username:</EntryLabel>
                  <input id='username'
                  name='username' 
                  value={formValues.username} 
                  onChange={handleChanges}/>
                    
              <EntryLabel htmlFor='password'>Password:</EntryLabel>
                  <input id='password' 
                  name='password' 
                  type='password'
                  value={formValues.password} 
                  onChange={handleChanges}/>
              <button id='submit'>Login</button>
              <Link to='/instructor-sign-up'> Not an instructor?</Link>
          </Loginform>
        </div>
    </Page>
     );
  
}

 

export default InstructorLogin;

