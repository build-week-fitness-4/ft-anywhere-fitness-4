import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
<<<<<<< HEAD
=======
import { Redirect } from "react-router-dom";
import styled from 'styled-components'
import YogaMat from '../Images/yogaMat.jpg'
>>>>>>> 0e52be4a575024c61faab6973256d75ab7f8e6e4


const initialValues = {
  username: '', 
  password: '',
  email: ''
}


  const LoginForm = styled.div`
    
    display:flex;
    justify-content:center;
    font-family:'Roboto';
    font-size:1.5rem;
    background-image: url(${YogaMat});
    height: 100vh;
    width: 100%;
    background-repeat:no-repeat;
    background-size:cover;
`

const H1 = styled.h1`
  border: 5px solid black;
  border-radius:10px;
  padding:5%;
  margin-right:-10%;
`
 
const Submitform = styled.form`

  display:flex;
  flex-direction:column;
  justify-content:center;
    
  `

  const Label = styled.label`
  display:flex;
  flex-direction:column;
  margin-top:5%;
  margin-left:-50%;
  
  
  `

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
           <LoginForm className="login-form">
           <Submitform onSubmit={submit}>
             <H1>Sign Up Below</H1>
                 <Label htmlFor='username'>Username:</Label>
                     <input id='username'
                     name='username' 
                     value={formValues.username} 
                     onChange={handleChanges}/>
                     
                 <Label htmlFor='password'>Password:</Label>
                     <input id='password' 
                     name='password' 
                     type='password'
                     value={formValues.password} 
                     onChange={handleChanges}/>
     
                 <Label htmlFor='email'>Email:</Label>
                     <input id='email' 
                     name='email' 
                     type='email'
                     value={formValues.email} 
                     onChange={handleChanges}/>

                     <Label> Choose Your Role: </Label>

                    <Label>Instructor</Label>
                     <input id='instructor'
                     name='instructor'
                     type='radio'
                     value='yes' />

                    <Label>Client</Label>
                    <input id='client'
                     name='client'
                     type='radio'
                     value='yes' />

     
                 <button id='submit'>Submit</button>
             </Submitform>
           </LoginForm>
     
         </div>
       );
}

 

export default InstructorSignUp;

